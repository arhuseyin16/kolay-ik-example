export const DynamicMenu = {
  items: [
    {
      title: 'Home',
      data: ['admin', 'employee', 'other'],
      url: '/dashboard',
      icon: 'pi pi-home'
    },
    {
      title: 'Employees',
      data: ['admin', 'employee'],
      url: '/employees',
      icon: 'pi pi-users'
    },
    {
      title: 'Permission',
      data: ['admin', 'other'],
      url: '/permission',
      icon: 'pi pi-sitemap'
    }
  ]
}
