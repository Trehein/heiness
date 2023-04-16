export type BreakpointObj = {
    screenSizeBreakpoint: number
    numberOfColumns: number
}

export type WidthBreakpointCalcParams = {
    breakpoints: Array<BreakpointObj>
}

export const widthBreakpointCalc = (params: WidthBreakpointCalcParams) => {
    const {breakpoints} = params
    let widthString = '100%'
    
    breakpoints.forEach((breakpoint: BreakpointObj) => {
        if(window.innerWidth >= breakpoint.screenSizeBreakpoint) {
            widthString = `${1 / breakpoint.numberOfColumns * 100}%`
        }
    })

    return widthString
}