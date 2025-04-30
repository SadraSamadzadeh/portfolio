import Folder from "../_components/Folder";

export const Icons = {
    Folder: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM20 11H4V19H20V11ZM20 9V7H11.5858L9.58579 5H4V9H20Z"></path></svg>
    ),
    ArrowRight: (props?: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
        ),
    File: () => (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.99999 2.5H14C14.3682 2.5 14.6667 2.79848 14.6667 3.16667V13.8333C14.6667 14.2015 14.3682 14.5 14 14.5H1.99999C1.63181 14.5 1.33333 14.2015 1.33333 13.8333V3.16667C1.33333 2.79848 1.63181 2.5 1.99999 2.5ZM4.66666 10.8333V8.16667L6 9.5L7.33333 8.16667V10.8333H8.66666V6.16667H7.33333L6 7.5L4.66666 6.16667H3.33333V10.8333H4.66666ZM12 8.83333V6.16667H10.6667V8.83333H9.33333L11.3333 10.8333L13.3333 8.83333H12Z" fill="#62748E"/>
        </svg>
    ),
}