import * as React from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

import { DataTableProps, GridCellExpandProps, renderCellExpandParams, GridCellExpand, Columns, Rows } from '../../types'

export default function DataTable(props: DataTableProps) {
  const { messages } = props;

  console.log('props from DeadLetterMessage --> ', props)

  // BEGIN code to add tooltip with full data on hover

  function isOverflown(element: any) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }

  const GridCellExpand: React.FunctionComponent<GridCellExpand> = React.memo(function GridCellExpand(props: GridCellExpandProps) {
    const { width, value } = props;
    const wrapper = React.useRef(null);
    const cellDiv = React.useRef(null);
    const cellValue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);
  
    const handleMouseEnter = () => {
      const isCurrentlyOverflown = isOverflown(cellValue.current);
      setShowPopper(isCurrentlyOverflown);
      setAnchorEl(cellDiv.current);
      setShowFullCell(true);
    };
  
    const handleMouseLeave = () => {
      setShowFullCell(false);
    };
  
    React.useEffect(() => {
      if (!showFullCell) {
        return undefined;
      }
  
      function handleKeyDown(nativeEvent: KeyboardEvent) {
        // IE11, Edge (prior to using Bink?) use 'Esc'
        if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
          setShowFullCell(false);
        }
      }
  
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [setShowFullCell, showFullCell]);


    return (
      <Box
        ref={wrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          alignItems: 'center',
          lineHeight: '24px',
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
        }}
      >
        <Box
          ref={cellDiv}
          sx={{
            height: '100%',
            width,
            display: 'block',
            position: 'absolute',
            top: 0,

          }}
        />
        <Box
          ref={cellValue}
          sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {value}
        </Box>
        {showPopper && (
          <Popper
            open={showFullCell && anchorEl !== null}
            anchorEl={anchorEl}
            style={{ width, marginLeft: -17 }}
          >
            <Paper
              elevation={1}
              style={{ minHeight: 'fit-content', whiteSpace: 'nowrap', width: 'fit-content' }}
            >
              <Typography variant="body2" style={{ padding: 8 }}>
                {value}
              </Typography>
            </Paper>
          </Popper>
        )}
      </Box>
    );
  });
  
  console.log('GridCellExpand --> ', GridCellExpand)

  GridCellExpand.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };
  
  function renderCellExpand(params: renderCellExpandParams) {
    console.log('renderCellExpand params --> ', params)
    return (
      <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
    );
  }
  
  renderCellExpand.propTypes = {
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: PropTypes.object.isRequired,
    /**
     * The cell value.
     * If the column has `valueGetter`, use `params.row` to directly access the fields.
     */
    value: PropTypes.string,
  };

  // END code to add tooltip with full data on hover

  const columns: Columns = [
    { field: 'consumerTag', headerName: 'consumerTag', renderCell: renderCellExpand, flex: 1.5 },
    { field: 'deliveryTag', headerName: 'deliveryTag', renderCell: renderCellExpand, flex: 1 },
    { field: 'redelivered', headerName: 'redelivered', renderCell: renderCellExpand, flex: 1 },
    { field: 'exchange', headerName: 'exchange', renderCell: renderCellExpand, flex: 1 },
    { field: 'routingKey', headerName: 'routingKey', renderCell: renderCellExpand, flex: 1 },
    { field: 'contentType', headerName: 'contentType', renderCell: renderCellExpand, flex: 1 },
    { field: 'contentEncoding', headerName: 'contentEncoding', renderCell: renderCellExpand, flex: 1 },
    { field: 'deliveryMode', headerName: 'deliveryMode', renderCell: renderCellExpand, flex: 1 },
    { field: 'priority', headerName: 'priority', renderCell: renderCellExpand, flex: 1 },
    { field: 'correlationId', headerName: 'correlationId', renderCell: renderCellExpand, flex: 1 },
    { field: 'replyTo', headerName: 'replyTo', renderCell: renderCellExpand, flex: 1 },
    { field: 'expiration', headerName: 'expiration', renderCell: renderCellExpand, flex: 1 },
    { field: 'messageId', headerName: 'messageId', renderCell: renderCellExpand, flex: 1 },
    { field: 'timestamp', headerName: 'timestamp', renderCell: renderCellExpand, flex: 1 },
    { field: 'type', headerName: 'type', renderCell: renderCellExpand, flex: 1 },
    { field: 'userId', headerName: 'userId', renderCell: renderCellExpand, flex: 1 },
    { field: 'appId', headerName: 'appId', renderCell: renderCellExpand, flex: 1 },
    { field: 'clusterId', headerName: 'clusterId', renderCell: renderCellExpand, flex: 1 },
  ]
  
  const rows: Rows = messages.map(el => {
    return {
      id: el.message_id,
      consumerTag: el.consumertag,
      deliveryTag: el.deliverytag,
      redelivered: el.redelivered,
      exchange: el.exchange,
      routingKey: el.routingkey,
      contentType: el.contenttype,
      contentEncoding: el.contentencoding,
      deliveryMode: el.deliverymode,
      priority: el.priority,
      correlationId: el.correlationid,
      replyTo: el.replyto,
      expiration: el.expiration,
      messageId: el.messageid,
      timestamp: el.timestamp ? new Date(Number(el.timestamp)).toISOString() : '',
      type: el.type,
      userId: el.userid,
      appId: el.appid,
      clusterId: el.clusterid,
    }
  });

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        components={{ Toolbar: GridToolbar }}
        initialState={{
          columns: {
            columnVisibilityModel: {
              // On load, hide any columns set as false, all other columns start as visible
              contentType: false,
              contentEncoding: false,
              deliveryMode: false,
              priority: false,
              correlationId: false,
              replyTo: false,
              expiration: false,
              messageId: false,
              timestamp: false,
              type: false,
              userId: false,
              appId: false,
              clusterId: false,
            },
          },
        }}
        // checkboxSelection // uncomment to add a checkbox next to each row item
      />
    </div>
  );
}
