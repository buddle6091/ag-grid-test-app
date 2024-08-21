'use client'

import 'ag-grid-enterprise';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { ColDef, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { GridReadyEvent, ISetFilterParams } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, { useCallback, useState } from 'react';
import ItsmeProductLabelBackgroundColorRenderer from './_components/ItsmeProductLabelBackgroundColorRenderer';
import ItsmeProductLabelTextColorRenderer from './_components/ItsmeProductLabelTextColorRenderer';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

// Row Data Interface
interface IRow {
    name: string;
    order: number;
    backgroundColor: string;
    textColor: string;
}


// Create new GridExample component
const GridExample = () => {

    const filterParams: ISetFilterParams = {
        comparator: (a: string | null, b: string | null) => {
            const valueA = a == null ? 0 : parseInt(a);
            const valueB = b == null ? 0 : parseInt(b);
            if (valueA === valueB) return 0;
            return valueA < valueB? -1 : 1;
        }
    }

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<IRow[]>([
        { name: '이달의 커피', order: 0, backgroundColor: "# 4275ff", textColor:  "# 4275ff" },
        { name: '인기상품', order: 1, backgroundColor: "# 4275ff", textColor:  "# 4275ff" },
        { name: '인기상품', order: 1, backgroundColor: "# 4275ff", textColor:  "# 4275ff" },

    ]);

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
        { headerName: '이름', field: 'name' ,  filter: true },
        { headerName: '순서', field: 'order', filter : "agSetColumnFilter" },
        { headerName: '배경 색상', field: 'backgroundColor', cellRenderer: ItsmeProductLabelBackgroundColorRenderer, filter : "agSetColumnFilter"},
        { headerName: '글자 색상', field: 'textColor', cellRenderer: ItsmeProductLabelTextColorRenderer, filter : "agSetColumnFilter"},
    ]);

    const defaultColDef: ColDef = {
        flex: 1,
    };

    const onGridReady = useCallback((params: GridReadyEvent) => {
        params.api.autoSizeAllColumns();
    }, []);


    // Container: Defines the grid's theme & dimensions.
    return (
        <div
            className={
                "ag-theme-quartz-dark"
            }
            style={{ width: '100%', height: '100%' }}
        >
            <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} onGridReady={onGridReady}/>
        </div>
    );
};

 

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between p-24">
      <GridExample />
    </main>
  );
}
