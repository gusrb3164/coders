import React from 'react';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: '#E5E5E5',
		color: theme.palette.common.black,
		fontWeight: 'bold',
	},
	body: {
		fontSize: '1rem',
	},
}))(TableCell);

const ProblemRank = ({ rows, isResult }) => {
	return (
		<Grid>
			<TableContainer>
				<Table size="small" style={{ border: '2px solid #9E9B9A' }}>
					<TableHead style={{ backgroundColor: '#E5E5E5' }}>
						<TableRow>
							<StyledTableCell align="center">
								채점 번호
							</StyledTableCell>
							<StyledTableCell align="center">
								아이디
							</StyledTableCell>
							{isResult ? (
								<StyledTableCell align="center">
									결과
								</StyledTableCell>
							) : null}
							<StyledTableCell align="center">
								메모리
							</StyledTableCell>
							<StyledTableCell align="center">
								시간
							</StyledTableCell>
							<StyledTableCell align="center">
								언어
							</StyledTableCell>
							<StyledTableCell align="center">
								코드 길이
							</StyledTableCell>
							<StyledTableCell align="center">
								제출한 시간
							</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.number}>
								<StyledTableCell
									align="center"
									component="th"
									scope="row"
								>
									{row.number}
								</StyledTableCell>
								<StyledTableCell align="center">
									{row.id}
								</StyledTableCell>
								{isResult ? (
									<StyledTableCell align="center">
										{row.result}
									</StyledTableCell>
								) : null}
								<StyledTableCell align="center">
									{row.memory}
								</StyledTableCell>
								<StyledTableCell align="center">
									{row.time}
								</StyledTableCell>
								<StyledTableCell align="center">
									{row.language}
								</StyledTableCell>
								<StyledTableCell align="center">
									{row.codeLen}
								</StyledTableCell>
								<StyledTableCell align="center">
									{row.submitTime}
								</StyledTableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	);
};

export default ProblemRank;