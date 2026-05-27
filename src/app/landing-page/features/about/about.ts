import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, OnDestroy, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface EventCard {
  id: number;
  tag: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface SideEvent {
  image: string;
  date: string;
  title: string;
  description: string;
}
interface News {
  image: string;
  category: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-about',
  imports: [RouterLink, NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly formspreeEndpoint = 'https://formspree.io/f/xjgzorpb';
  private readonly ccRecipient = 'asarerichmond94@gmail.com';
  private toastTimeoutId: ReturnType<typeof setTimeout> | null = null;

  readonly showSuccessToast = signal(false);

  readonly contactForm: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    specialty: [''],
    message: ['', Validators.required],
  });

  onContactSubmit(): void {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formValue = this.contactForm.getRawValue();

    this.http
      .post(
        this.formspreeEndpoint,
        {
          name: formValue.fullName,
          email: formValue.email,
          specialty: formValue.specialty,
          message: formValue.message,
          subject: 'About Page Contact Form Submission',
          _cc: this.ccRecipient,
        },
        {
          headers: { Accept: 'application/json' },
        },
      )
      .subscribe({
        next: () => {
          this.contactForm.reset();
          this.displaySuccessToast();
        },
        error: (error: unknown) => {
          console.error('Failed to submit About contact form to Formspree.', error);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.toastTimeoutId !== null) {
      clearTimeout(this.toastTimeoutId);
      this.toastTimeoutId = null;
    }
  }

  private displaySuccessToast(): void {
    this.showSuccessToast.set(true);

    if (this.toastTimeoutId !== null) {
      clearTimeout(this.toastTimeoutId);
    }

    this.toastTimeoutId = setTimeout(() => {
      this.showSuccessToast.set(false);
      this.toastTimeoutId = null;
    }, 4000);
  }

  readonly sideEvents: SideEvent[] = [
    {
      image: '/assets/images/about-webinar-nhs.jpg',
      date: 'MAY 12 • ONLINE',
      title: 'Webinar: NHS Leadership for Clinicians',
      description:
        'Join senior NHS consultants as they share pathways into medical management and leadership.',
    },
    {
      image: '/assets/images/about-medical-student.jpg',
      date: 'JUN 05 • BIRMINGHAM',
      title: 'Medical Student Networking Mixer',
      description:
        'Connect with final year medical and dental students to share experiences and career advice.',
    },
    {
      image: '/assets/images/about-innovation-in-tropical.jpg',
      date: 'JUL 18 • MANCHESTER',
      title: 'Innovation in Tropical Medicine Symposium',
      description:
        'Exploring new diagnostic tools for tropical disease management in low-resource settings.',
    },
  ];
  readonly news: News[] = [
    {
      image: '/assets/images/about-latest-medical-insight.png',
      category: 'Medical Insight',
      title: 'The Evolving Role of Diaspora Medics in African Healthcare Policy',
      description:
        'How Ghanaian doctors in the UK are influencing health systems back home through strategic advisory...',
    },
    {
      image: '/assets/images/about-association-news.png',
      category: 'Association News',
      title: 'GDDA-UK Mentorship Program: 2024 Enrollment Now Open',
      description:
        'Our flagship mentorship initiative returns this year with over 50 registered consultant mentors across all…',
    },
    {
      image: '/assets/images/about-gloabal-reach.png',
      category: 'Global Outreach',
      title: 'Success Report: The 2023 Surgical Mission to Kumasi',
      description:
        'A comprehensive look at the 45 complex procedures completed during our latest medical outreach mission...',
    },
  ];
  readonly stats: Stat[] = [
    { value: '£9,900', label: 'Raised', description: 'In charitable donations' },
    { value: '£3,000', label: 'Distributed', description: 'In direct aid' },
    { value: '500+', label: 'Volunteers', description: 'Across the UK' },
    { value: '600', label: 'Beneficiaries', description: 'Lives impacted' },
  ];

  readonly milestones: EventCard[] = [
    {
      id: 1,
      tag: 'Humanitarian',
      title: 'COVID-19 Response & Humanitarian Aid',
      description:
        'UDDA-UK mobilised healthcare workers and community leaders to deliver critical aid, PPE, and awareness campaigns during the global pandemic.',
      date: '2020 – 2021',
      image: 'assets/images/events/covid-response.jpg',
      imageAlt: 'Healthcare workers distributing PPE during COVID-19',
    },
    {
      id: 2,
      tag: 'Medical Aid',
      title: 'Restoring Dignity: The Obstetric Fistula Aid',
      description:
        'A life-changing programme funding surgical interventions for women suffering from obstetric fistula — restoring dignity and health.',
      date: 'Nov 2019',
      image: 'assets/images/events/fistula-aid.jpg',
      imageAlt: 'Medical professionals providing care',
    },
    {
      id: 3,
      tag: 'Annual Conference',
      title: 'Gathering for Excellence',
      description:
        'Our flagship annual conference brings together diaspora healthcare professionals, policymakers, and community advocates to drive change.',
      date: 'Ongoing',
      image: 'assets/images/events/conference.jpg',
      imageAlt: 'Professionals at the Gathering for Excellence conference',
    },
  ];

  readonly eventTypes = [
    { icon: '🏥', label: 'Health Conferences' },
    { icon: '🎗️', label: 'Charity Galas' },
    { icon: '📚', label: 'Education Seminars' },
    { icon: '🤝', label: 'Community Outreach' },
    { icon: '🏃', label: 'Fundraising Runs' },
    { icon: '🍽️', label: 'Networking Dinners' },
  ];
  readonly benefits: Benefit[] = [
    {
      title: 'Professional Networking',
      description:
        'Connect with Ghanaian doctors, dentists, consultants, researchers, and healthcare professionals across the UK and Ghana for career growth and collaboration.',
      icon: 'hub',
    },
    {
      title: 'Career & Registration Support',
      description:
        'Guidance and support for healthcare professionals seeking career development, revalidation, and easier registration pathways through collaboration with GMDC.',
      icon: 'school',
    },
    {
      title: 'Healthcare Outreach & Projects',
      description:
        'Support and contribute to medical and dental projects in Ghana, including volunteering opportunities and community healthcare initiatives.',
      icon: 'campaign',
    },
    {
      title: 'Welfare & Community Support',
      description:
        'Confidential support for members during work-related challenges while building a strong community that celebrates and supports one another.',
      icon: 'volunteer_activism',
    },
  ];
}
