import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  permissionType = [
    {value: 'EVLİLİK İZNİ'},
    {value: 'DOĞUM İZNİ'},
    {value: 'BABALIK İZNİ'},
    {value: 'ÜCRETSİZ İZNİ'},
    {value: 'HASTALIK İZNİ'},
  ];

  submit: boolean = false;

  currentForm = this.fb.group({
    permissionType: ['', Validators.required],
    todayPermission: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  clear() {
    this.currentForm.reset();
  }

  save() {
    this.submit = true;
    if (this.currentForm.status === 'INVALID') {
      return;
    }
    this.toastr.success('İzin Talebi Oluşturuldu', 'BAŞARILI');
    localStorage.setItem('permission', JSON.stringify(this.currentForm.value));
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500)
  }
}
