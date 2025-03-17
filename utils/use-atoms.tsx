import { StyleSheet } from "react-native";

export const useAtoms = () =>
	StyleSheet.create({
		debug: {
			borderColor: "red",
			borderWidth: 1,
		},

		/*
		 * Positioning
		 */
		fixed: {
			position: "fixed",
		},
		absolute: {
			position: "absolute",
		},
		relative: {
			position: "relative",
		},
		inset0: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		},
		bottom0: {
			bottom: 0,
		},
		z10: {
			zIndex: 10,
		},
		z20: {
			zIndex: 20,
		},
		z30: {
			zIndex: 30,
		},
		z40: {
			zIndex: 40,
		},
		z50: {
			zIndex: 50,
		},
		negZ10: {
			zIndex: -10,
		},
		overflowHidden: {
			overflow: "hidden",
		},
		heightFull: {
			height: "100%",
		},
		widthFull: {
			width: "100%",
		},

		/**
		 * Typography Utils
		 */
		textAuto: {
			textAlign: "auto",
		},
		textLeft: {
			textAlign: "left",
		},
		textCenter: {
			textAlign: "center",
		},
		textRight: {
			textAlign: "right",
		},
		textJustify: {
			textAlign: "justify",
		},
		uppercase: {
			textTransform: "uppercase",
		},
		fontBold: {
			fontWeight: "bold",
		},
		fontMedium: {
			fontWeight: "500",
		},

		bgBlack: {
			backgroundColor: "#000000",
		},
		bgWhite: {
			backgroundColor: "#ffffff",
		},
		textWhite: {
			color: "#ffffff",
		},
		textGray: {
			color: "#333333",
		},


		/*
		 * Border
		 */
		border0: {
			borderWidth: 0,
		},
		borderT0: {
			borderTopWidth: 0,
		},
		borderB0: {
			borderBottomWidth: 0,
		},
		borderL0: {
			borderLeftWidth: 0,
		},
		borderR0: {
			borderRightWidth: 0,
		},
		border: {
			borderWidth: StyleSheet.hairlineWidth,
		},
		border2: {
			borderWidth: 2,
		},
		border1: {
			borderWidth: 2 / 2,
		},
		borderT: {
			borderTopWidth: StyleSheet.hairlineWidth,
		},
		borderT1: {
			borderTopWidth: 2 / 2,
		},
		borderB: {
			borderBottomWidth: StyleSheet.hairlineWidth,
		},
		borderL: {
			borderLeftWidth: StyleSheet.hairlineWidth,
		},
		borderR: {
			borderRightWidth: StyleSheet.hairlineWidth,
		},
		borderSolid: {
			borderStyle: "solid",
		},
		borderDashed: {
			borderStyle: "dashed",
		},
		borderDotted: {
			borderStyle: "dotted",
		},
		curveCircular: {
			borderCurve: "circular",
		},
		curveContinuous: { borderCurve: "continuous" },
		rounded0: {
			borderRadius: 0,
		},
		rounded4: {
			borderRadius: 4,
		},
		rounded8: {
			borderRadius: 8,
		},
		rounded12: {
			borderRadius: 12,
		},
		rounded16: {
			borderRadius: 16,
		},
		rounded20: {
			borderRadius: 20,
		},
		rounded24: {
			borderRadius: 24,
		},
		rounded28: {
			borderRadius: 24 + 4,
		},
		rounded99: {
			borderRadius: 99,
		},
		roundedFull: {
			borderRadius: 99 + 999,
		},

		/**
		 * Flex
		 */
		root: {
			flex: 1,
			backgroundColor: "red",
		},
		flexGrow1: {
			flexGrow: 1,
		},
		flex: {
			display: "flex",
		},
		flexWrap: {
			flexWrap: "wrap",
		},
		"flex0.5": {
			flex: 0.5,
		},
		flex1: {
			flex: 1,
		},
		"flex1.5": {
			flex: 1.5,
		},
		flexRow: {
			flexDirection: "row",
		},
		itemsCenter: {
			alignItems: "center",
		},
		itemsEnd: {
			alignItems: "flex-end",
		},
		justifyBetween: {
			justifyContent: "space-between",
		},
		justifyAround: {
			justifyContent: "space-around",
		},
		justifyCenter: {
			justifyContent: "center",
		},
		justifyEnd: {
			justifyContent: "flex-end",
		},
		selfStart: {
			alignSelf: "flex-start",
		},
		selfCenter: {
			alignSelf: "center",
		},
		selfEnd: {
			alignSelf: "flex-end",
		},
		selfAuto: {
			alignSelf: "auto",
		},
		gap2: {
			gap: 2,
		},
		gap4: {
			gap: 4,
		},
		gap6: {
			gap: 4 + 2,
		},
		gap8: {
			gap: 8,
		},
		gap12: {
			gap: 12,
		},
		gap16: {
			gap: 16,
		},
		gap20: {
			gap: 20,
		},
		gap24: {
			gap: 24,
		},
		gap28: {
			gap: 24 + 4,
		},
		gap32: {
			gap: 32,
		},

		/**
		 * Padding
		 */
		p4: { padding: 4 },
		p8: { padding: 8 },
		p12: { padding: 12 },
		p16: { padding: 16 },
		p20: { padding: 20 },
		p24: { padding: 24 },
		p32: { padding: 32 },
		px4: { paddingHorizontal: 4 },
		px8: { paddingHorizontal: 8 },
		px12: { paddingHorizontal: 12 },
		px16: { paddingHorizontal: 16 },
		px20: { paddingHorizontal: 20 },
		px24: { paddingHorizontal: 24 },
		px32: { paddingHorizontal: 32 },
		py2: { paddingVertical: 2 },
		py4: { paddingVertical: 4 },
		py8: { paddingVertical: 8 },
		py12: { paddingVertical: 12 },
		py16: { paddingVertical: 16 },
		py20: { paddingVertical: 20 },
		py24: { paddingVertical: 24 },
		py32: { paddingVertical: 32 },
		pt4: { paddingTop: 4 },
		pt8: { paddingTop: 8 },
		pt12: { paddingTop: 12 },
		pt16: { paddingTop: 16 },
		pt20: { paddingTop: 20 },
		pt24: { paddingTop: 24 },
		pt32: { paddingTop: 32 },
		pb4: { paddingBottom: 4 },
		pb8: { paddingBottom: 8 },
		pb12: { paddingBottom: 12 },
		pb16: { paddingBottom: 16 },
		pb20: { paddingBottom: 20 },
		pb24: { paddingBottom: 24 },
		pb32: { paddingBottom: 32 },
		pl4: { paddingLeft: 4 },
		pl6: { paddingLeft: 4 + 2 },
		pl8: { paddingLeft: 8 },
		pl12: { paddingLeft: 12 },
		pl16: { paddingLeft: 16 },
		pl20: { paddingLeft: 20 },
		pl24: { paddingLeft: 24 },
		pl32: { paddingLeft: 32 },
		pr4: { paddingRight: 4 },
		pr8: { paddingRight: 8 },
		pr12: { paddingRight: 12 },
		pr16: { paddingRight: 16 },
		pr20: { paddingRight: 20 },
		pr24: { paddingRight: 24 },
		pr32: { paddingRight: 32 },

		/**
		 * Margin
		 */
		m4: { margin: 4 },
		m8: { margin: 8 },
		m12: { margin: 12 },
		m16: { margin: 16 },
		m20: { margin: 20 },
		m24: { margin: 24 },
		m28: { margin: 24 + 4 },
		m32: { margin: 32 },
		m40: { margin: 40 },
		mx4: { marginHorizontal: 4 },
		mx8: { marginHorizontal: 8 },
		mx12: { marginHorizontal: 12 },
		mx16: { marginHorizontal: 16 },
		mx20: { marginHorizontal: 20 },
		mx24: { marginHorizontal: 24 },
		mx28: { marginHorizontal: 24 + 4 },
		mx32: { marginHorizontal: 32 },
		mx40: { marginHorizontal: 40 },
		my4: { marginVertical: 4 },
		my8: { marginVertical: 8 },
		my12: { marginVertical: 12 },
		my16: { marginVertical: 16 },
		my20: { marginVertical: 20 },
		my24: { marginVertical: 24 },
		my28: { marginVertical: 24 + 4 },
		my32: { marginVertical: 32 },
		my40: { marginVertical: 40 },
		mt4: { marginTop: 4 },
		mt6: { marginTop: 4 + 2 },
		mt8: { marginTop: 8 },
		mt12: { marginTop: 12 },
		mt16: { marginTop: 16 },
		mt20: { marginTop: 20 },
		mt24: { marginTop: 24 },
		mt28: { marginTop: 24 + 4 },
		mt32: { marginTop: 32 },
		mt40: { marginTop: 40 },
		mb4: { marginBottom: 4 },
		mb8: { marginBottom: 8 },
		mb12: { marginBottom: 12 },
		mb16: { marginBottom: 16 },
		mb20: { marginBottom: 20 },
		mb24: { marginBottom: 24 },
		mb28: { marginBottom: 24 + 4 },
		mb32: { marginBottom: 32 },
		mb40: { marginBottom: 40 },
		ml4: { marginLeft: 4 },
		ml8: { marginLeft: 8 },
		ml12: { marginLeft: 12 },
		ml16: { marginLeft: 16 },
		ml20: { marginLeft: 20 },
		ml24: { marginLeft: 24 },
		ml28: { marginLeft: 24 + 4 },
		ml32: { marginLeft: 32 },
		ml56: { marginLeft: 48 + 8 },
		mr4: { marginRight: 4 },
		mr8: { marginRight: 8 },
		mr12: { marginRight: 12 },
		mr16: { marginRight: 16 },
		mr20: { marginRight: 20 },
		mr24: { marginRight: 24 },
		mr28: { marginRight: 24 + 4 },
		mr32: { marginRight: 32 },
		mr40: { marginRight: 40 },

		/**
		 * Height
		 */
		h1: { height: 1 },
		h4: { height: 4 },
		h8: { height: 8 },
		h12: { height: 12 },
		h16: { height: 16 },
		h20: { height: 20 },
		h24: { height: 24 },
		h28: { height: 24 + 4 },
		h32: { height: 32 },
		h40: { height: 40 },
		h48: { height: 48 },
		h56: { height: 48 + 8 },
		h64: { height: 64 },
		h80: { height: 80 },
		h96: { height: 96 },
		h112: { height: 112 },
		/**
		 * Width
		 */
		w1: { width: 1 },
		w4: { width: 4 },
		w8: { width: 8 },
		w12: { width: 12 },
		w16: { width: 16 },
		w20: { width: 20 },
		w24: { width: 24 },
		w28: { width: 24 + 4 },
		w32: { width: 32 },
		w40: { width: 40 },
		w48: { width: 48 },
		w56: { width: 48 + 8 },
		w64: { width: 64 },
		w80: { width: 80 },
		w96: { width: 96 },
		w112: { width: 112 },

		/**
		 * Transform
		 */
		rotate90: {
			transform: [{ rotate: "90deg" }],
		},
		rotate180: {
			transform: [{ rotate: "180deg" }],
		},
	});
