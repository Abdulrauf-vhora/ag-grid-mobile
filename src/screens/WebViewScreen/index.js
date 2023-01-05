import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

import * as styles from './styles';

export const WebViewScreen = () => {
  return (
    <View style={styles.full()}>
      <WebView
        source={{
          html: ` <!DOCTYPE html>
<html lang="en">

<head>
    <title>Ag-Grid Basic Example</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
    <script src="https://unpkg.com/ag-grid-community/dist/ag-grid-community.min.js"></script>
    <!-- <script src="main.js"></script> -->
</head>

<body>
    <div style="background-color: #8abde3;">
        <label style="color: white ;margin:0px 5px ; text-align:center">
            Record :
        </label>

        <select style=" width: 180px; height: 40px" id="selector">
            <option value="100">100 record</option>
            <option value="1000">1000 record</option>
        </select>
    </div>

    <div id="myGrid" style="height: 500px; width:100%;" class="ag-theme-alpine">
    </div>
    <script>
        var myIcons = {
            sortAscending: function () {
                return "ASC";
            },
            sortDescending: function () {
                return "DESC";
            },
        };

        const columnDefs = [
            {
                headerName: "Group 1",
                children: [{ field: "athlete" }, { field: "age" }],
            },
            {
                headerName: "Group 2",
                children: [{ field: "age" }, { field: "country" }],
            },
            {
                headerName: "Group 3",
                children: [{ field: "country" }, { field: "year" }],
            },
            {
                headerName: "Group 4",
                children: [{ field: "year" }, { field: "date" }],
            },
            {
                headerName: "Group 5",
                children: [{ field: "date" }, { field: "sport" }],
            },
            {
                headerName: "Group 6",
                children: [{ field: "sport" }, { field: "gold" }],
            },
            {
                headerName: "Group 7",
                children: [{ field: "gold" }, { field: "silver" }],
            },
            {
                headerName: "Group 8",
                children: [{ field: "silver" }, { field: "bronze" }],
            },
            {
                headerName: "Group 9",
                children: [{ field: "bronze" }, { field: "total" }],
            },
            {
                headerName: "Group 10",
                children: [{ field: "total" }, { field: "athlete" }],
            },
        ];
        const gridOptions = {
            defaultColDef: {
                width: 150,
                sortable: true,
                resizable: true,
                filter: true,
                floatingFilter: true,
            },
            columnDefs: columnDefs,
            rowData: null,
            sideBar: true,
            autoGroupColumnDef: {
                headerName: "Athlete",
                field: "athlete",
                rowDrag: true,
                // use font awesome for first col, with numbers for sort
                icons: {
                    menu: '<i class="fa fa-shower"/>',
                    filter: '<i class="fa fa-long-arrow-alt-up"/>',
                    columns: '<i class="fa fa-snowflake"/>',
                    sortAscending: '<i class="fa fa-sort-alpha-up"/>',
                    sortDescending: '<i class="fa fa-sort-alpha-down"/>',
                },
                headerCheckboxSelection: true,
                width: 300,
            },
            // override all the defaults with font awesome
            icons: {
                // use font awesome for menu icons
                menu: '<i class="fa fa-bath" style="width: 10px"/>',
                filter: '<i class="fa fa-long-arrow-alt-down"/>',
                columns: '<i class="fa fa-handshake"/>',
                sortAscending: '<i class="fa fa-long-arrow-alt-down"/>',
                sortDescending: '<i class="fa fa-long-arrow-alt-up"/>',
                // use some strings from group
                groupExpanded:
                    '<img src="https://www.ag-grid.com/example-assets/group/contract.png" style="height: 12px; width: 12px;padding-right: 2px"/>',
                groupContracted:
                    '<img src="https://www.ag-grid.com/example-assets/group/expand.png" style="height: 12px; width: 12px;padding-right: 2px"/>',
                columnMovePin: '<i class="far fa-hand-rock"/>',
                columnMoveAdd: '<i class="fa fa-plus-square"/>',
                columnMoveHide: '<i class="fa fa-times"/>',
                columnMoveMove: '<i class="fa fa-link"/>',
                columnMoveLeft: '<i class="fa fa-arrow-left"/>',
                columnMoveRight: '<i class="fa fa-arrow-right"/>',
                columnMoveGroup: '<i class="fa fa-users"/>',
                rowGroupPanel: '<i class="fa fa-university"/>',
                pivotPanel: '<i class="fa fa-magic"/>',
                valuePanel: '<i class="fa fa-magnet"/>',
                menuPin: "P", // just showing letters, no graphic
                menuValue: "V",
                menuAddRowGroup: "A",
                menuRemoveRowGroup: "R",
                clipboardCopy: ">>",
                clipboardPaste: ">>",
                rowDrag: '<i class="fa fa-circle"/>',
            },
            rowSelection: "multiple",
        };

        // // setup the grid after the page has finished loading
        document.addEventListener("DOMContentLoaded", function () {
            const gridDiv = document.querySelector("#myGrid");
            const selector = document.querySelector("#selector");
            let allData = [];
            selector.addEventListener("change", function (e) {
                const count = Number(e.target.value);
                gridOptions.api.setRowData(allData.slice(0, count));
            });

            new agGrid.Grid(gridDiv, gridOptions);

            fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
                .then((response) => response.json())
                .then((data) => {
                    allData = data;

                    gridOptions.api.setRowData(data.slice(0, 100));
                });
        });

    </script>
</body>

</html>"
`,
        }}
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
      />
    </View>
  );
};
