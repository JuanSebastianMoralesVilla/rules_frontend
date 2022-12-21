import React, { Component } from "react";

import Selector from "../components/Selector.js";
import "../stylesheets/Home.css";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { DataGrid } from "@mui/x-data-grid";

import swal from 'sweetalert';

import "bootstrap/dist/css/bootstrap.min.css";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columnsProcessed: [],
      columns: [],
      rows: [],
      rules: []
    };
  }

  async getSavedRules() {
    const res = await fetch('http://ruleengineback-env.eba-fpaxptkd.us-east-1.elasticbeanstalk.com/api/rules/lastProcessed')

    const rules = await res.json();

    return rules;

  }

  async getColumns() {
    const res = await fetch('http://ruleengineback-env.eba-fpaxptkd.us-east-1.elasticbeanstalk.com/api/transactions/columns')
    return await res.json();
  }

  async getColumnsProcessed() {
    const columns = await this.getColumns();

    const columnsProcessed = [];

    for (var i = 0; i < columns.length; i++) {
      columnsProcessed.push({ field: columns[i], headerName: columns[i] });
    }

    return columnsProcessed;
  }

  async getRows() {
    const res = await fetch('http://ruleengineback-env.eba-fpaxptkd.us-east-1.elasticbeanstalk.com/api/transactions/')
    var rows = await res.json();

    var rowsProcessed = [];

    for (var i = 0; i < rows.length; i++) {
      rowsProcessed.push(rows[i].data);
    }

    return rowsProcessed;
  }

  async componentDidMount() {
    this.setState({ columnsProcessed: await this.getColumnsProcessed() })
    this.setState({ columns: await this.getColumns() });
    this.setState({ rules: await this.getSavedRules() });
  }

  restoreRule(rule) {
    const ruleInput = document.getElementById("rule");
    ruleInput.value = rule;
  }

  render() {
    const processRule = async () => {
      const ruleInput = document.getElementById("rule");
      const ruleText = ruleInput.value;


      var cantAnd = (ruleText.match(/AND/g) || []).length;
      var cantOr = (ruleText.match(/OR/g) || []).length;
      const suma = cantAnd + cantOr;

      if (suma > 3) {
        swal("A maximum of 4 expressions per rule are allowed", "", "error");
        this.setState({ rows: [] });
        return;
      }


      const rawResponse = await fetch('http://ruleengineback-env.eba-fpaxptkd.us-east-1.elasticbeanstalk.com/api/transactions/findByRule', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: ruleText
      });

      const status = await rawResponse.status;
      const response = await rawResponse.text();
      console.log(status)
      if (status !== 200) {

        swal({
          title: "Info",
          text: "There was a problem with your rule. Please check that is written properly and the columns exist.",
          icon: "error",
        });

        this.setState({ rows: [] });
        return;
      }

      const rows = JSON.parse(response)

      var rowsProcessed = [];

      for (var i = 0; i < rows.length; i++) {
        rowsProcessed.push(rows[i].data);
      }

      this.setState({ rows: rowsProcessed });
      this.setState({ rules: await this.getSavedRules() });
    }

    const updateRule = (symbol) => {

      const ruleInput = document.getElementById("rule");

      const cursorPos = ruleInput.selectionStart;

      const prevRule = ruleInput.value;

      ruleInput.value = [
        prevRule.slice(0, cursorPos),
        symbol,
        prevRule.slice(cursorPos),
      ].join("");

      ruleInput.setSelectionRange(ruleInput.value.length, ruleInput.value.length);
      ruleInput.focus();
    };

    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <h2 className="masthead-brand">RULES ENGINE</h2>
            <nav className="nav nav-masthead justify-content-center"></nav>
          </div>
        </header>
        <div className="separator">
          <label></label>
        </div>

        <main role="main" className="container">
          <h4 className="cover-heading">Example</h4>
          <div className="textExample">

            <ul className="lead">
              <li>Column 1 == 5</li>
              <li>Column 2 != column 3</li>
              <li>(Column 1 {">"} Column 2) AND (Column 1 == 2)</li>
              <li> Example text : "word"</li>
              <li>Example   number : 10 </li>
            </ul>

          </div>

          <table className="selectors-table">
            <thead>
              <tr>
                <th className="selector-head">Logical</th>
                <th className="selector-head">Boolean</th>
                <th className="selector-head">Comparation</th>
                <th className="selector-head">Columns</th>
              </tr>
            </thead>
            <tbody className="selectors-body">
              <tr className="selectors-tr">
                <td className="selectors-td">
                  <Selector type="logical" updateRule={updateRule} />
                </td>
                <td className="selectors-td">
                  <Selector type="boolean" updateRule={updateRule} />
                </td>
                <td className="selectors-td">
                  <Selector type="comparation" updateRule={updateRule} />
                </td>
                <td className="selectors-td">
                  <Selector type="columns" updateRule={updateRule} columns={this.state.columns} />
                </td>
              </tr>
            </tbody>
          </table>


          <div className="area">
            <label>Rule:</label>&nbsp;&nbsp;
            <table>
              <tbody>
                <tr className="input-table-row">
                  <td>
                    <textarea
                      id="rule"
                      placeholder="(reported==true)AND(amount>50000)"
                      rows="5"
                      cols="50"
                    />
                  </td>
                  <td>
                    <Button variant="contained" onClick={processRule} endIcon={<SendIcon />}>
                      Process Rule
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


          <div style={{ height: 400, width: "100%" }}>
            <DataGrid id='main-table'
              rows={this.state.rows}
              columns={this.state.columnsProcessed}
              pageSize={5}
              rowsPerPageOptions={[5]}
              getRowId={(row) => row.transaction_id}
            />
          </div>


          <div className="rule-history-container" style={{ height: 400, width: "100%" }}>
            <br></br>
            <h4>Rule history</h4>
            <DataGrid id='rule-history-table'
              onRowClick={(row) => this.restoreRule(row.row.rule)}
              rows={this.state.rules}
              columns={[{ field: "rule", headerName: "rule", width: 600, align: "left" }]}
              pageSize={5}
              rowsPerPageOptions={[5]}
              getRowId={(row) => row.id}
              getRowClassName={() => "rule-history-row"}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
