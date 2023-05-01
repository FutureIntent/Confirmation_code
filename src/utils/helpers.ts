import { IPlatformOS } from '@components/organisms/DownloadDemo/DownloadDemo';

export const getClampValue = (min: string, max: string, container = '1830px'): string =>
    `clamp(${min}, calc(${parseInt(max, 10)} / ${parseInt(container, 10)} * 100vw) , ${max})`;

export const hexToRGB = (hex: string): string => {
    if (hex.length === 3) {
        return `${parseInt(hex[1], 16)}, ${parseInt(hex[2], 16)}, ${parseInt(hex[3], 16)}`;
    }

    return `${parseInt(`${hex[1]}${hex[2]}`, 16)}, ${parseInt(`${hex[3]}${hex[4]}`, 16)}, ${parseInt(
        `${hex[5]}${hex[6]}`,
        16,
    )}`;
};

export const getDiscountPrice = (price: number, discount: number) => price / 100 * discount;

export const getMacOsChipVersion = () => {
    const canvas = document.createElement('canvas');
    let gl;
    let debugInfo;
    let renderer;

    try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
        // eslint-disable-next-line no-console
        console.info('Error creating WebGL context', e);
    }

    if (gl) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }

    return renderer.indexOf('Apple M') !== -1 ? 'appleSilicon' : 'appleIntel';
}

const x64BitSignatures = [ "x86_64", "x86-64", "Win64", "x64;", "amd64", "AMD64", "WOW64", "x64_64", "ia64", "sparc64", "ppc64", "IRIX64" ];

export const getOperatingSystem = (): { os: IPlatformOS, bits: number } => {
    let operatingSystem = 'windows' as IPlatformOS;
    let bitSignature = 32;

    if(typeof window !== 'undefined') {
        if ( window.navigator.platform.indexOf( 'Win' ) !== -1 ) {
            operatingSystem = 'windows' as IPlatformOS;
        }
        if ( window.navigator.platform.indexOf( 'X11' ) !== -1 ) {
            operatingSystem = 'unix' as IPlatformOS;
        }
        if ( window.navigator.platform.indexOf( 'Linux' ) !== -1 ) {
            operatingSystem = 'linux' as IPlatformOS;
        }

        if ( window.navigator.platform.indexOf( 'Mac' ) !== -1 ) {
            operatingSystem = 'osx' as IPlatformOS;
            // operatingSystem = getMacOsChipVersion() as IPlatformOS;
        }

        if ( x64BitSignatures.some( ( signature ) => window.navigator.userAgent.indexOf( signature ) !== -1 ) ) {
            bitSignature = 64;
        }

    }

    return { os: operatingSystem, bits: bitSignature };
}

export const downloadFile = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
