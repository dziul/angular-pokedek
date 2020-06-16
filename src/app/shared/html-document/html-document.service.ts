import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class HtmlDocumentService {
  constructor(private documentMeta: Meta, private documentTitle: Title) {}

  getTitle() {
    return this.documentTitle.getTitle();
  }

  setTitle(title: string) {
    this.documentTitle.setTitle(title);
  }

  setMetaDescription(description: string) {
    if (this.documentMeta.getTag('name="description"')) {
      this.documentMeta.updateTag({ name: 'description', content: description });
    } else {
      this.documentMeta.addTag({ name: 'description', content: description });
    }
  }
}
