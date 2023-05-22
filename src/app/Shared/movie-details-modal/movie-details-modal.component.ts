import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss']
})
export class MovieDetailsModalComponent {
  youtubeVideoUrl: SafeResourceUrl;

  constructor(
    public dialogRef: MatDialogRef<MovieDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { youtubeVideoUrl: string },
    private sanitizer: DomSanitizer
  ) {
    this.youtubeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.youtubeVideoUrl);
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}
