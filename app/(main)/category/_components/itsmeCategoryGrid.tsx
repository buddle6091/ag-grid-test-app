'use client'

import React, { useCallback, useState } from 'react'
import 'ag-grid-enterprise';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { ColDef, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { GridReadyEvent, CellClickedEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import ExposureResultRenderer from './exposureResultRenderer';
import { useSetRecoilState } from 'recoil';
import { DrawerTrigger } from '@/components/ui/drawer';
import { drawerIsOpenAtom, categoryItemAtom } from '@/store/client/categoryAtom';

interface IRow {
    name: string;
    order: number;
    appExposure: boolean;
    kioskExposure: boolean;
    posExposure: boolean;
}

const ItsmeCategoryGrid = () => {

    const [rowData, setRowData] = useState<IRow[]>([
      { name: '커피', order: 0, appExposure: true, kioskExposure: true, posExposure: true },
      { name: '블렌디드', order: 1, appExposure: true, kioskExposure: true, posExposure: true },
      { name: '라떼', order: 2, appExposure: true, kioskExposure: true, posExposure: true },
      { name: '티', order: 3, appExposure: true, kioskExposure: true, posExposure: true },
      { name: '생과일', order: 4, appExposure: true, kioskExposure: true, posExposure: true },
      { name: '베이커리', order: 5, appExposure: true, kioskExposure: true, posExposure: true },
      { name: '생수', order: 6, appExposure: true, kioskExposure: true, posExposure: true },
      { name: '악세사리', order: 7, appExposure: false, kioskExposure: false, posExposure: false },
      { name: '견과류', order: 8, appExposure: true, kioskExposure: true, posExposure: true },
    ])

    const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
      { headerName: '이름', field: 'name', filter: true },
      { headerName: '순서', field: 'order', filter: true},
      { headerName: '앱 노출', field: 'appExposure', cellRenderer: ExposureResultRenderer },
      { headerName: '키오스크 노출', field: 'kioskExposure', cellRenderer: ExposureResultRenderer },
      { headerName: 'POS 노출', field: 'posExposure', cellRenderer: ExposureResultRenderer },
      ])
      
    const defaultColDef: ColDef = {
        flex: 1,
      };

    const onGirdReady = useCallback((params: GridReadyEvent) => {
        params.api.autoSizeAllColumns()
      }, [])

    const setIsDrawerOpen = useSetRecoilState(drawerIsOpenAtom);
    const setCategoryItem = useSetRecoilState(categoryItemAtom);

    const onCellClicked = useCallback((event: CellClickedEvent) => {
      setCategoryItem(event?.data);
       console.log('cellClicked', event?.data);
        setIsDrawerOpen(true);
      }, [setCategoryItem, setIsDrawerOpen]);



  return (
    <div style={{ marginTop:'1.12rem', width: '100%', height: '26.6rem'}} className="ag-theme-quartz">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGirdReady}
          onCellClicked={onCellClicked}
        />
    </div>
  )
}

export default ItsmeCategoryGrid    