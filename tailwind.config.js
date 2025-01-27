module.exports = {
    theme: {
        extend: {
            animation: {
                'bounce-custom': 'bounceCustom 2s ease-in-out infinite',
            },
            keyframes: {
                bounceCustom: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
};
