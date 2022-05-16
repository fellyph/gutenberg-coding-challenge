/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

export const RelatedPost = ( { postLink, postTitle, postId, postExcerpt } ) => {
	return (
		<li className="related-post">
			<a
				className="link"
				href={ postLink }
				alt={ postTitle }
				data-post-id={ postId }
			>
				<RichText.Content
					value={ postTitle }
					className="title"
					tagName="h3"
				/>
				<RichText.Content
					value={ postExcerpt }
					className="excerpt"
					tagName="div"
				/>
			</a>
		</li>
	);
};
