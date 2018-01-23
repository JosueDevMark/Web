import { css } from 'glamor';

const PRIMARY_COLOR = '#212121';

export const fullMenuWindow = css({
    height: '100vh'
});

export const smallMenuWindow = css({
    height: '40px'
});

export const logo = css({
    position: 'absolute !important',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
});

export const smallLogo = css({
    height: '100%'
});

export const biggLogo = css({
    height: '60%'
});

export const menuItem = css({
    maxHeight: '40px'
});

export const menuTrigger = css({
    top: '350px'
});

export const debugElement = css({
    height: '10px',
    width: '10px',
    backgroundColor: 'red'
})

export const menu = css({
    position: 'sticky'
})