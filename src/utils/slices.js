export const mapSliceIdToComponent(slice,slicePrefix='prismic_PageBody'){
    const formattedSlideId = sliceId.replace(slicePrefix,'');
    switch sliceId{
        case 'Hero':
            return Hero
        default: 
            break;
}