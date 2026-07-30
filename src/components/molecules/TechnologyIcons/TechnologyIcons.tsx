import { FC } from 'react';
import { StyledTechnologyIcons } from './styles';

import { Icon } from 'Atoms/Icon';

const TechnologyIcons: FC = () => {
	return (
		<StyledTechnologyIcons>
			<div className="grid">
				<div className="card">
					<div className="icon tooltip">
						{/* <span className="tooltip-text">Javascript</span> */}
						<a
							href="https://www.javascript.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="JavaScript"
							title="JavaScript"
						>
							<Icon icon="JAVASCRIPT" />
						</a>
					</div>
				</div>

				<div className="card">
					<div className="icon">
						<a
							href="https://www.typescriptlang.org"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="TypeScript"
							title="TypeScript"
						>
							<Icon icon="TYPESCRIPT" />
						</a>
					</div>
				</div>

				<div className="card">
					<div className="icon">
						<a
							href="https://angular.io"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Angular"
							title="Angular"
						>
							<Icon icon="ANGULAR" />
						</a>
					</div>
				</div>

				<div className="card">
					<div className="icon">
						<a
							href="https://stenciljs.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="StencilJS"
							title="StencilJS"
						>
							<Icon icon="STENCILJS" />
						</a>
					</div>
				</div>

				<div className="card">
					<div className="icon">
						<a
							href="https://nextjs.org"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="NextJS"
							title="NextJS"
						>
							<Icon icon="NEXTJS" />
						</a>
					</div>
				</div>

				<div className="card">
					<div className="icon">
						<a
							href="https://storybook.js.org"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Storybook"
							title="Storybook"
						>
							<Icon icon="STORYBOOK" />
						</a>
					</div>
				</div>

				<div className="card">
					<div className="icon">
						<a
							href="https://www.python.org"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Python"
							title="Python"
						>
							<Icon icon="PYTHON" />
						</a>
					</div>
				</div>

				<div className="card">
					<div className="icon">
						<a
							href="https://playwright.dev"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Playwright"
							title="Playwright"
						>
							<Icon icon="PLAYWRIGHT" />
						</a>
					</div>
				</div>
			</div>
		</StyledTechnologyIcons>
	);
};

export { TechnologyIcons };
