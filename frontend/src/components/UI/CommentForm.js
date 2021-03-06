import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Comment } from '.';

const CommentForm = ({ comments, handleComments, pId, id, name }) => {
	const [cmt, setText] = useState('');
	const handlePost = () => {
		if (cmt !== '') {
			try {
				const commentData = {
					deleted: false,
					edited: false,
					problemId: Number(pId),
					text: cmt,
					userId: id, // user name 추가 예정
				};
				handleComments('post', commentData);
				setText('');
			} catch (e) {
				// eslint-disable-next-line no-alert
				alert('로그인을 해주세요.');
			}
		}
	};

	return (
		<Grid className="comment-form" container direction="column">
			<Grid className="comment-post">
				<TextField
					className="comment-post-input"
					label="comment"
					multiline
					variant="outlined"
					value={cmt}
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
				<Button
					className="comment-post-btn"
					variant="outlined"
					color="primary"
					onClick={handlePost}
				>
					댓글 작성
				</Button>
			</Grid>
			{comments ? (
				<Grid className="comment-comments">
					{comments.map((comment) => (
						<Comment
							key={comment.id}
							userName={comment.userId}
							comment={comment.text}
							createAt={comment.createdAt}
							problemId={comment.problemId}
							commentId={comment.id}
							handleComments={handleComments}
							isSameUser={id === comment.userId}
						/>
					))}
				</Grid>
			) : undefined}
		</Grid>
	);
};

export default CommentForm;
