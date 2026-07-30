import { FC } from 'react';
import { StyledSocialIcons } from './styles';

import { Icon } from 'Atoms/Icon';
import { siteConfig } from 'Config/site';

const SocialIcons: FC = () => {
	return (
		<StyledSocialIcons>
			<li>
				{/* eslint-disable-next-line prettier/prettier */}
				<a
					href={siteConfig.links.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub profile"
					title="Github"
				>
					<Icon icon="GITHUB" />
				</a>
			</li>
			<li>
				{/* eslint-disable-next-line prettier/prettier */}
				<a
					href={siteConfig.links.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn profile"
					title="LinkedIn"
				>
					<Icon icon="LINKEDIN" />
				</a>
			</li>
			<li>
				{/* eslint-disable-next-line prettier/prettier */}
				<a
					href={siteConfig.links.youtube}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="YouTube channel"
					title="YouTube"
				>
					<Icon icon="YOUTUBE" />
				</a>
			</li>
			<li>
				{/* eslint-disable-next-line prettier/prettier */}
				<a
					href={`mailto:${siteConfig.links.email}`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Send an email"
					title="Email"
				>
					<Icon icon="EMAIL" />
				</a>
			</li>
		</StyledSocialIcons>
	);
};

export { SocialIcons };
