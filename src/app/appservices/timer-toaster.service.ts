import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TimerToasterService {

  constructor(private toastr: ToastrService,private router:Router) {}

  showToastWithTimer(message: string, duration: number) {
    const toastRef = this.toastr.show(`${message} (Redirecting to Login page in ${duration}s)`);

    let remainingTime = duration;

    const interval = setInterval(() => {
      remainingTime--;
      if (toastRef && toastRef.toastId) {
        // Update the toast message dynamically
        const toastElement = document.getElementById(`toast-container-${toastRef.toastId}`);
        if (toastElement) {
          toastElement.innerHTML = `${message} (Redirecting to Login page in ${remainingTime}s)`;
        }
      }

      if (remainingTime <= 0) {
        clearInterval(interval);
        localStorage.clear();
       this.router.navigateByUrl('/login');
      }
    }, 1000);
  }}
