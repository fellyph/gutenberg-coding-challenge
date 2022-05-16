/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getEmojiFlag } from './utils';
import { RelatedPost } from './components/relatedPost';

export default function Preview( {
	countryCode,
	countryName,
	continentName,
	relatedPosts,
} ) {
	if ( ! countryCode ) return null;

	const emojiFlag = getEmojiFlag( countryCode ),
		hasRelatedPosts = relatedPosts?.length > 0;

	return (
		<div className="xwp-country-card">
			<div
				className="xwp-country-card__media"
				data-emoji-flag={ emojiFlag }
			>
				<div className="xwp-country-card-flag">{ emojiFlag }</div>
			</div>
			<h3 className="xwp-country-card__heading">
				{ __( 'Hello from', 'xwp-country-card' ) }{ ' ' }
				<strong className="xwp-country-card__country-name">
					{ countryName }
				</strong>
				(
				<span className="xwp-country-card__country-code">
					{ countryCode }
				</span>
				),{ ' ' }
				<span className="xwp-country-card__continent-name">
					{ continentName }
				</span>
				!
			</h3>
			<div className="xwp-country-card__related-posts">
				<h3 className="xwp-country-card__related-posts__heading">
					{ hasRelatedPosts
						? sprintf(
								// translators: %d: related posts total number
								__(
									'There are %d related posts:',
									'xwp-country-card'
								),
								relatedPosts.length
						  )
						: __(
								'There are no related posts.',
								'xwp-country-card'
						  ) }
				</h3>
				{ hasRelatedPosts && (
					<ul className="xwp-country-card__related-posts-list">
						{ relatedPosts.map( ( relatedPost, index ) => (
							<RelatedPost
								key={ index }
								postId={ relatedPost.id }
								postLink={ relatedPost.link }
								postTitle={ relatedPost.title }
								postExcerpt={ relatedPost.excerpt }
							/>
						) ) }
					</ul>
				) }
			</div>
		</div>
	);
}
