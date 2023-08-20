import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IPortfolio } from '@Types';
import { shimmer } from 'Utils/shimmer';
import { StyledPortfolioCard } from './styles';

export interface PortfolioProps {
	item: IPortfolio;
}

const PortfolioCard: FC<PortfolioProps> = ({ item }) => {
	return (
		<StyledPortfolioCard>
			<Link href={`/portfolio/${item.slug}`}>
				<a>
					<Image
						src={`/portfolio/${item.slug}.jpg`}
						width={1920}
						height={1080}
						objectFit="cover"
						alt={item.title}
						placeholder="blur"
						blurDataURL={shimmer(1920, 1080)}
					/>
				</a>
			</Link>

			<div className="details">
				<Link href={`/portfolio/${item.slug}`}>
					<a>
						<h1>{item.title}</h1>
						<p>{item.type}</p>
						<p>
							<strong>Technologies used:</strong> <em>{item.technologies.join(', ')}</em>
						</p>
					</a>
				</Link>
			</div>
		</StyledPortfolioCard>
	);
};

export { PortfolioCard };
