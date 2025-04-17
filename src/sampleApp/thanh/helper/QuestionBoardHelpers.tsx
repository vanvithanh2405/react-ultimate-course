export function getStatusColor(status: string) {
    switch (status) {
        case 'CORRECT':
            return 'green';
        case 'INCORRECT':
            return 'red';
        case 'PARTIALLY_CORRECT':
            return 'orange';
        case 'NONE':
        default:
            return 'gray';
    }
}