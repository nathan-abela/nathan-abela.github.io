import { FC, ReactNode } from 'react';

import { Footer } from 'Organisms/Footer';
import { Header } from 'Organisms/Header';

import { StyledLayout } from './styles';

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<StyledLayout>
			<a className="skip-link" href="#main-content">
				Skip to content
			</a>
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</StyledLayout>
	);
};

export { Layout };
