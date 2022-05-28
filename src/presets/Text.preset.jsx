import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

const BASE = {
    color: colors.lightGrey,
    fontFamily: typography.Regular,
    fontSize: 14,
}

const BASE_BOLD = {
    color: colors.white,
    fontFamily: typography.Semibold,
}

const MEDIUM = {
    color: colors.black,
    fontFamily: typography.Medium
}

export const presets = {
    default: BASE,
    bold: BASE_BOLD,
    h1: {
        ...BASE_BOLD,
        fontSize: 24,
    },
    h2: {
        ...BASE_BOLD,
        fontSize: 20,
    },
    h3: {
        ...MEDIUM,
        fontSize: 20,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 18,
    },
    h5: {
        ...MEDIUM,
        fontSize: 16
    },
    h6: {
        ...MEDIUM,
        fontSize: 14
    }
}