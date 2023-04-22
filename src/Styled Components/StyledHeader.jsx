import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-bottom: 20px;
  }

  .input-button {
    display: flex;
    align-self: center;
    padding: 20px;
    width: 100%;
    justify-content: center;
  }

  .input-button input {
    width: 30%;
  }

  .first_part {
    width: 1120px;
    margin: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .first_box {
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  .first_form {
    display: flex;
    margin: 25px;
    margin-bottom: 0;
    position: relative;
  }

  .first_form button {
    padding: 5px 30px;
    border-radius: 200px;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    margin-left: 20px;
  }

  .second_box {
    height: 15%;
  }

  #export-btn {
    background: #392ab5;
    color: #fff;
  }

  .export-part {
    width: 1120px;
    margin: auto;
    display: flex;
    justify-content: end;
    padding: 30px 0;
  }

  .no-select {
    user-select: none;
  }

  .disabled-trr {
    opacity: 0.3;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
    overflow-x: auto;
  }

  table td {
    width: 100%;
    word-break: break-all;
  }

  table tr td {
    border-right: 1px solid #848484;
  }

  table tr td:last-child {
    border-right: none;
  }

  table tr:nth-child(1) td:last-child {
    border-right: none;
    border-top-right-radius: 10px;
  }

  table tr:nth-child(1) td:first-child {
    border-top-left-radius: 10px;
  }

  table tr:nth-child(1) td:last-child {
    border-bottom-right-radius: 0px;
  }

  table tr:nth-child(1) td:first-child {
    border-bottom-left-radius: 0px;
  }

  td,
  th {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  tr:nth-child(odd) {
    background: #fff;
  }

  .results-table {
    width: 100%;
  }

  .results-table tr:nth-of-type(1) {
    text-align: center;
  }

  .results-table tr td {
    text-align: center;
  }

  .red {
    color: red;
  }

  .blue {
    color: rgb(59, 59, 187);
  }

  .error {
    color: red;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .strikethrough {
    text-decoration: line-through;
    background-color: #fff !important;
  }
`;
