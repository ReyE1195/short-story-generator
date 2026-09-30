// Small shared style objects. Kept as plain JS objects (not CSS) so components
// can import exactly the pieces they need without pulling in a stylesheet.

export const labelStyle = {
    display: "block",
    fontSize: 13,
    color: "#b7bccb",
    marginBottom: 6,
};

export const inputStyle = {
    width: "100%",
    background: "#11141d",
    border: "1px solid #2c3346",
    borderRadius: 8,
    padding: "8px 10px",
    color: "#e9e6da",
    fontSize: 14,
    boxSizing: "border-box",
};

export const primaryBtnStyle = {
    background: "#c9a44c",
    color: "#161a26",
    border: "none",
    borderRadius: 8,
    padding: "9px 16px",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 14,
};

export const ghostBtnStyle = {
    background: "transparent",
    color: "#b7bccb",
    border: "1px solid #2c3346",
    borderRadius: 8,
    padding: "9px 14px",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    gap: 6,
};

export const iconBtnStyle = {
    background: "transparent",
    border: "1px solid #2c3346",
    borderRadius: 8,
    color: "#8890a6",
    cursor: "pointer",
    padding: "0 10px",
};