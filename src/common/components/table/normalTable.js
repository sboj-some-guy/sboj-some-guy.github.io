import React from "react";
import { Table } from "antd";
import styled from "styled-components";

const NormalTable = (props) => {
  let { columns, dataSource, rowKey, defaultPageSize = 5, className } = props;
  return (
    <Table className={className} columns={columns} dataSource={dataSource} rowKey={rowKey} pagination={{ defaultPageSize: defaultPageSize, showSizeChanger: true }} />
  )
}

const StyledNormalTable = styled(NormalTable)`
  .ant-table-body {
    overflow: auto;
    table {
      thead {
        tr {
          th {
            padding: 8px;
            text-align: left;
            font-weight: 900;
            font-size: 12px;
            white-space: nowrap;
          }
        }
      }

      tbody {
        tr {
          border-bottom: solid 1px #c0c0c0;
          td {
            height: 50px;
            padding: 10px;
            text-align: left;
            font-size: 12px;
          }
        }
      }
    }
  }

  .ant-table-body::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }

  .ant-table-body::-webkit-scrollbar-track {
    background: #c0c0c0;
  }

  .ant-table-body::-webkit-scrollbar-thumb {
    background: #423e3e;
  }

  .ant-pagination.ant-table-pagination {
    .ant-pagination-disabled {
      display: none;
    }
  }
`;

export { StyledNormalTable as NormalTable };