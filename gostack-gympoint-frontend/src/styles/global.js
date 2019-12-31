import { createGlobalStyle } from 'styled-components';
import { colors } from '~/styles/colors';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    user-select: none;
  }

  * :focus {
    outline: 0;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    font: 1rem 'Roboto', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #444;
  }

  a { text-decoration: none; }

  ul { list-style: none; }

  .w-100 {
    width: 100% !important;
  }

  .ml-0 {
    margin-left: 0 !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  form {
    .form-group {
      width: 100%;
      margin-bottom: 15px;

      label {
        display: inline-block;
        margin-bottom: 5px;
        text-transform: uppercase;
        font-size: .9rem;
        font-weight: bold;
      }

      > span {
        display: block;
        padding: 5px 0 0;
        font-size: .85rem;
        color: ${colors.danger};
      }
    }

    .form-row {
      display: flex;
      justify-content: space-between;

      .form-group + .form-group {
        margin-left: 15px;
      }
    }
  }

  input, select, textarea {
    width: 100%;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 4px;
    color: #222;
    padding: 10px 15px;

    &::placeholder {
      color: #aaa;
    }

    &:disabled {
      background: #f5f5f5;
    }
  }

  .input-icon {
    position: relative;

    svg {
      position: absolute;
      top: 9px;
      left: 10px;
    }

    &.left {
      input {
        padding-left: 32px;
      }
    }

    &.right {
      input {
        padding-right: 32px;
      }
    }
  }

  .select-combo__control {
    border-color: #ddd !important;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    border-radius: 4px;
    padding: 0 20px;
    transition: opacity .2s;
    font-weight: bold;
    font-size: 1rem;

    &.primary {
      color: #fff;
      background: ${colors.primary};
    }

    &.secondary {
      color: #fff;
      background: #ccc;
    }

    &:hover {
      opacity: .8;
    }

    > svg {
      margin-right: 5px;
    }
  }

  .link {
    color: ${colors.link};
    font-weight: 400;
    transition: opacity .2s;

    &.primary { color: ${colors.primary} };
    &.danger { color: ${colors.danger} };

    &:hover {
      opacity: .8;
    }
  }

  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;

    thead tr th {
      padding: 10px;
      text-transform: uppercase;
    }

    tbody tr {

      &:nth-child(even) {
        background: #f9f9f9;
      }

      td {
        border-bottom: 1px solid #eee;
        padding: 15px 10px;
        color: #666;
        font-size: 14px;

        &.actions {
          width: 120px;
          text-align: center;

          button + button {
            margin-left: 15px;
          }
        }
      }
    }
  }
`;
