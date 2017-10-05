export const getInlineStyles = ({ styles = {}, ...props }) => ({
    transitionDelay: props.delay,
    transitionDuration: props.duration,
    transitionTimingFunction: props.timingFn,
    ...styles,
});

export const defaultAnimationProps = {
    appear: true,
    duration: '500ms',
    timeout: 0,
    timingFn: 'linear',
};
