type NavLink = {
  href: string;
  label: string;

}


export const links: NavLink[] = [
{ href: '/', label: 'home'},
{ href: '/favorites', label: 'favorites'},
{ href: '/booking', label: 'bookings'},
{ href: '/reviews', label: 'reviews'},
{ href: '/rentals/create', label: 'create rental'},
{ href: '/rentals', label: 'my rentals'},
{ href: '/profile', label: 'profile'}

]