import * as React from "react";
import styles from "./navbar.module.css";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Book, Carpenter, Phone, VerifiedUser } from "@mui/icons-material";

export default function SwipeableTemporaryDrawer() {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
				backgroundColor: "rgba(21, 28, 34, 0.7)",
				height: "100%",
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				<nav className={styles.navList}>
					<ul className={styles.navContent}>
						<li className={styles.list}>
							<a className={styles.ref} href="/">
								<VerifiedUser /> About
							</a>
						</li>
					</ul>
					<ul className={styles.navContent}>
						<li className={styles.list}>
							<a className={styles.ref} href="/">
								<Carpenter /> Career
							</a>
						</li>
					</ul>
					<ul className={styles.navContent}>
						<li className={styles.list}>
							<a className={styles.ref} href="/">
								<Book /> Education
							</a>{" "}
						</li>
					</ul>
					<ul className={styles.navContent}>
						<li className={styles.list}>
							<a className={styles.ref} href="/">
								<Phone /> Contact
							</a>
						</li>
					</ul>
				</nav>
			</List>
		</Box>
	);

	return (
		<div>
			{["right"].map((anchor) => (
				<React.Fragment key={anchor}>
					<div
						className={styles.buttonToggles}
						onClick={toggleDrawer(anchor, true)}>
						<MenuOpenIcon />
					</div>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}>
						{list(anchor)}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
}
