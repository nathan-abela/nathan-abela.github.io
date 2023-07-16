import { FC } from 'react';
import { StyledSocialIcons } from './styles';

import { Icon } from 'Atoms/Icon';

const SocialIcons: FC = () => {
	return (
		<StyledSocialIcons>
			<li>
				{/* eslint-disable-next-line prettier/prettier */}
				<a
					href="https://github.com/nathan-abela"
					target="_blank"
					rel="noopener noreferrer"
					title="Github"
				>
					<Icon icon="GITHUB" />
				</a>
			</li>
			<li>
				{/* eslint-disable-next-line prettier/prettier */}
				<a
					href="https://www.linkedin.com/in/nathan-abela"
					target="_blank"
					rel="noopener noreferrer"
					title="LinkedIn"
				>
					<Icon icon="LINKEDIN" />
				</a>
			</li>
			<li>
				{/* eslint-disable-next-line prettier/prettier */}
				<a
					href="https://www.youtube.com/@nathanabela"
					target="_blank"
					rel="noopener noreferrer"
					title="YouTube"
				>
					<Icon icon="YOUTUBE" />
				</a>
			</li>
			<li>
				{/* eslint-disable-next-line prettier/prettier */}
				<a
					href="mailto:nathanabela7@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					title="Email"
				>
					<Icon icon="EMAIL" />
				</a>
			</li>
		</StyledSocialIcons>
	);
};

export { SocialIcons };
