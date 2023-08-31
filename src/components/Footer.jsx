import * as React from 'react';
import * as Material from '@mui/material';
import { footerContainer, siteFooter, pageContainer } from './Styles';

// This function renders main content of web app
function Footer() {
	return (
		<>
			<div className="footerContainer" style={{ ...footerContainer }}>
				<footer style={siteFooter}>
					<p className="copyright-text">
						Copyright &copy; 2023 All Rights Reserved by
						<a href="www.github.com/AveryCaldwell">
							Avery Caldwell
						</a>
					</p>
					<ul
						style={{
							listStyle: 'none',
							textDecoration: 'none',
							color: 'white',
						}}
					>
						<li>
							<a
								className="github"
								href="https://www.linkedin.com/in/averycaldwell/"
							></a>
						</li>

						<li>
							<a
								className="linkedin"
								href="https://www.linkedin.com/in/averycaldwell/"
							></a>
						</li>
					</ul>
				</footer>
			</div>
		</>
	);
}

export default Footer;
