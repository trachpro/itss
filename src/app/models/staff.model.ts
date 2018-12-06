export class StaffModel {

  _id: String;

  name: String;

  email: String;

  role: String;

  constructor(params) {
    this._id = params._id;
    this.name = params.name;
    this.email = params.email;
    this.role = params.role || 'ROLE_STAFF';
  }

  getRoleName() {
    if(!this.role) return '';

    switch(this.role) {
      case 'ROLE_STAFF': return 'Nhân Viên';
      case 'ROLE_MANAGER': return 'Quản Lý';
    }
  }
}
