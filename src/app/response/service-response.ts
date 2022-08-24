export class Dashboard {
  id?: number;
  name?: string;
  date?: string;
}

export class Department {
  id?: number;
  name?: string;
}

export class Employees {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  position?: string;
  locationId?: number;
  departmentId?: number;
  startDate?: string;
  color?: any;
}

export class Location {
  id?: number;
  name?: string;
}
