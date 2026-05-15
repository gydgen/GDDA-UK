import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

interface NewsArticle {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
}

@Component({
  selector: 'app-news-section',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './news.html',
  styleUrl: './news.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsSectionComponent {
  readonly articles: NewsArticle[] = [
    {
      image: '/assets/images/news-1.jpg',
      imageAlt: 'Diaspora medics in discussion at a health conference',
      category: 'Medical Insight',
      title: 'The Evolving Role of Diaspora Medics in African Healthcare Policy',
      excerpt:
        'How Ghanaian doctors in the UK are influencing health systems back home through strategic advisory...',
    },
    {
      image: '/assets/images/news-2.jpg',
      imageAlt: 'GDDA-UK mentorship program participants',
      category: 'Association News',
      title: 'GDDA-UK Mentorship Program: 2024 Enrollment Now Open',
      excerpt:
        'Our flagship mentorship initiative returns this year with over 50 registered consultant mentors across all…',
    },
    {
      image: '/assets/images/news-3.jpg',
      imageAlt: 'Surgical mission team in Kumasi',
      category: 'Global Outreach',
      title: 'Success Report: The 2023 Surgical Mission to Kumasi',
      excerpt:
        'A comprehensive look at the 45 complex procedures completed during our latest medical outreach mission...',
    },
  ];
}
