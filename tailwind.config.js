/** @type {import('tailwindcss').Config} */
import plugin  from 'tailwindcss/plugin';
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".btn": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "48px",
          paddingLeft: "16px",
          paddingRight: "16px",
          borderRadius: "6px",
          fontSize: "18px",
          fontFamily: '"JetBrains Mono", monospace',
          color: "#fff",
          boxShadow:
            "rgba(45, 35, 66, 0.4) 0px 2px 4px, rgba(45, 35, 66, 0.3) 0px 7px 13px -3px, rgba(58, 65, 111, 0.5) 0px -3px 0px inset",
          transition: "box-shadow 0.15s, transform 0.15s",
          cursor: "pointer",
          whiteSpace: "nowrap",
          userSelect: "none",
        },

        ".btn-tomato": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "48px",
          paddingLeft: "16px",
          paddingRight: "16px",
          borderRadius: "6px",
          fontSize: "18px",
          fontFamily: '"JetBrains Mono", monospace',
          color: "#fff",
          backgroundImage:
            "radial-gradient(100% 100% at 100% 0, tomato 0%, #ff6347 100%)",
          boxShadow:
            "rgba(45, 35, 66, 0.4) 0px 2px 4px, rgba(45, 35, 66, 0.3) 0px 7px 13px -3px, rgba(58, 65, 111, 0.5) 0px -3px 0px inset",
          transition: "box-shadow 0.15s, transform 0.15s",
          cursor: "pointer",
          whiteSpace: "nowrap",
          userSelect: "none",
          "&:hover": {
            boxShadow:
             "radial-gradient(100% 100% at 100% 0, #ff6347 0%, #ff2400 100%)", 
            transform: "translateY(-2px)",
          },
          "&:active": {
            boxShadow:  "rgba(255, 69, 0, 0.9) 0px 3px 7px inset",
            transform: "translateY(2px)",
          },
        },

        ".btn-blue": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "48px",
          paddingLeft: "16px",
          paddingRight: "16px",
          borderRadius: "6px",
          fontSize: "18px",
          fontFamily: '"JetBrains Mono", monospace',
          color: "#fff",
          backgroundImage:
            "radial-gradient(100% 100% at 100% 0, #5adaff 0%, #5468ff 100%)",
          boxShadow:
            "rgba(45, 35, 66, 0.4) 0px 2px 4px, rgba(45, 35, 66, 0.3) 0px 7px 13px -3px, rgba(58, 65, 111, 0.5) 0px -3px 0px inset",
          transition: "box-shadow 0.15s, transform 0.15s",
          cursor: "pointer",
          whiteSpace: "nowrap",
          userSelect: "none",
          "&:hover": {
            boxShadow:
              "rgba(45, 35, 66, 0.4) 0px 4px 8px, rgba(45, 35, 66, 0.3) 0px 7px 13px -3px, #3c4fe0 0px -3px 0px inset",
            transform: "translateY(-2px)",
          },
          "&:active": {
            boxShadow: "#3c4fe0 0px 3px 7px inset",
            transform: "translateY(2px)",
          },
        },
      });
    }),
  ],
};
