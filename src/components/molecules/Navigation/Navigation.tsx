import { FC } from 'react';
import Link from 'next/link';
import { List, StyledNavigation } from './styles';

import { ThemeToggle } from 'Atoms/ThemeToggle';

interface NavigationProps {
	onClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ onClick }) => {
	return (
		<StyledNavigation>
			<List>
				<li>
					<Link href="/">
						<a onClick={onClick}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a onClick={onClick}>About</a>
					</Link>
				</li>
				<li>
					<Link href="/education">
						<a onClick={onClick}>Education</a>
					</Link>
				</li>
				<li>
					<Link href="/work">
						<a onClick={onClick}>Work</a>
					</Link>
				</li>
				<li>
					<Link href="/portfolio">
						<a onClick={onClick}>Portfolio</a>
					</Link>
				</li>
				<li className="desktop-only">
					<ThemeToggle />
				</li>
			</List>
		</StyledNavigation>
	);
};

export { Navigation };
