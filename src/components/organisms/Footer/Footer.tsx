import { FC } from 'react';
import { Flex, StyledFooter } from './styles';

import { Container } from 'Atoms/Container';
import { siteConfig } from 'Config/site';
import { SocialIcons } from 'Molecules/SocialIcons';

const Footer: FC = () => {
	return (
		<StyledFooter>
			<Container>
				<Flex>
					<span>
						&copy; {new Date().getFullYear()} {siteConfig.name}{' '}
					</span>
					<SocialIcons />
				</Flex>
			</Container>
		</StyledFooter>
	);
};

export { Footer };
