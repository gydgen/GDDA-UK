import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Article {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
}

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.html',
  styleUrl: './news-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsGridComponent {
  readonly articles = signal<Article[]>([
    {
      category: 'Medical Insight',
      date: '12 Apr 2026',
      title: 'Advances in Sickle Cell Treatment: A Diaspora Perspective',
      excerpt: 'New treatment protocols developed in the UK are showing promise for Ghanaian patients. Our members share what this means for cross-border care.',
      readTime: '5 min read',
    },
    {
      category: 'Association News',
      date: '28 Mar 2026',
      title: 'GDDA-UK Annual Conference 2026 — Highlights',
      excerpt: 'Over 200 members gathered in London for our flagship annual event. Here are the key discussions and announcements.',
      readTime: '3 min read',
    },
    {
      category: 'Global Outreach',
      date: '15 Mar 2026',
      title: 'COVID-19 Relief: A Legacy of First Response',
      excerpt: 'We reflect on our £9,900 donation to Ghana during the pandemic — the first Ghanaian diaspora society to donate directly.',
      readTime: '4 min read',
    },
    {
      category: 'Member Spotlight',
      date: '01 Mar 2026',
      title: 'Dr. Abena Asante: Bridging Two Worlds',
      excerpt: 'Our Secretary shares her journey from Accra to London, and why GDDA-UK became her professional home.',
      readTime: '6 min read',
    },
    {
      category: 'Policy & Advocacy',
      date: '18 Feb 2026',
      title: 'GDDA-UK Responds to NHS Workforce Consultation',
      excerpt: 'Our formal response to the NHS Long Term Workforce Plan addresses the needs of internationally educated doctors.',
      readTime: '4 min read',
    },
    {
      category: 'Education',
      date: '05 Feb 2026',
      title: '500 Oxford Textbooks: The Knowledge Legacy',
      excerpt: 'In 2007, we donated 500 medical textbooks to Ghanaian teaching hospitals. Here is what happened next.',
      readTime: '3 min read',
    },
  ]);

  categoryClass(category: string): string {
    const map: Record<string, string> = {
      'Medical Insight': 'news-card__badge--teal',
      'Association News': 'news-card__badge--navy',
      'Global Outreach': 'news-card__badge--green',
      'Member Spotlight': 'news-card__badge--gold',
      'Policy & Advocacy': 'news-card__badge--red',
      'Education': 'news-card__badge--purple',
    };
    return map[category] ?? 'news-card__badge--navy';
  }
}
