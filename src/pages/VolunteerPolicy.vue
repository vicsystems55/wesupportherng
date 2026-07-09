<template>
  <DefaultLayout>
    <main class="relative overflow-hidden bg-cream py-24">
      <div class="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div class="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-5">
        <!-- Header -->
        <div class="mx-auto max-w-3xl text-center reveal">
          <span class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
            Volunteer Policy
          </span>

          <h1 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-6xl">
            WeSupportHer
            <span class="text-secondary">Volunteer Policy</span>
          </h1>

          <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
            This Policy establishes the framework governing the recruitment, engagement, 
            management, supervision and conduct of volunteers serving with WeSupportHer.
          </p>

          <div class="mx-auto mt-5 flex w-32 items-center justify-center gap-2">
            <span class="h-1 w-10 rounded-full bg-primary"></span>
            <span class="h-1 w-10 rounded-full bg-secondary"></span>
            <span class="h-1 w-10 rounded-full bg-accent"></span>
          </div>
        </div>

        <!-- Policy Content -->
        <div class="reveal mt-16 rounded-[2rem] border border-black/5 bg-white p-6 shadow-2xl shadow-black/10 md:p-10">
          
          <!-- Section 1: Introductory Statement -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">1</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Introductory Statement</h2>
            </div>
            <div class="prose prose-sm max-w-none text-dark/70 md:prose-base">
              <p>
                This Volunteer Policy ("Policy") establishes the framework governing the recruitment, engagement, 
                management, supervision and conduct of volunteers serving with WeSupportHer ("WSH" or the "Organisation"). 
                It sets out the standards, expectations, rights and responsibilities applicable to volunteers in support 
                of WSH's mission to advance gender equity, promote the health and wellbeing of women and girls, strengthen 
                women's leadership, and empower women and girls to realise their full potential.
              </p>
              <p>
                The Policy is intended to promote a safe, respectful, accountable and professional volunteering environment 
                that protects the interests of volunteers, beneficiaries, staff, partners and the Organisation, while ensuring 
                that volunteer activities are undertaken in a manner consistent with WSH's values, policies and strategic objectives.
              </p>
              <p>
                This Policy should be read together with the WSH Volunteer Agreement, which every volunteer is required to execute 
                as a condition precedent to commencing any volunteer engagement with the Organisation. By signing the Volunteer 
                Agreement and participating in any WSH activity, each volunteer acknowledges that they have read, understood and 
                agree to comply with the provisions of this Policy and any other policies, procedures or codes of conduct that 
                may be issued by the Organisation from time to time.
              </p>
              <p>
                While this Policy seeks to address the principal matters relating to volunteer engagement, it is not intended to 
                be exhaustive and cannot anticipate every circumstance that may arise in the course of volunteering. Accordingly, 
                WSH reserves the right to interpret, review, amend, supplement or withdraw any provision of this Policy, in whole 
                or in part, from time to time where necessary to reflect changes in applicable law, operational requirements, 
                organisational priorities or recognised best practice. Any amendments shall be communicated to volunteers through 
                appropriate channels, including email communications, internal memoranda or other official notices.
              </p>
              <p>
                <strong>Compliance with this Policy is a mandatory condition of volunteering with WSH.</strong> Volunteers are 
                expected to familiarise themselves with its provisions and to conduct themselves at all times in a manner that 
                upholds the Organisation's mission, values, reputation and commitment to safeguarding those it serves.
              </p>
            </div>
          </div>

          <!-- Section 2: About WeSupportHer -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">2</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">About WeSupportHer</h2>
            </div>
            
            <div class="grid gap-6 md:grid-cols-2">
              <div class="rounded-2xl border border-primary/20 bg-soft-purple p-6">
                <h3 class="font-display text-xl font-black text-primary">Our Vision</h3>
                <p class="mt-2 text-sm leading-relaxed text-dark/70">
                  A world where every woman and girl enjoys equal rights, opportunities, dignity and representation; 
                  and where gender equity is embedded in the policies, institutions and cultures that shape our societies.
                </p>
              </div>
              
              <div class="rounded-2xl border border-secondary/20 bg-soft-orange p-6">
                <h3 class="font-display text-xl font-black text-secondary">Our Mission</h3>
                <p class="mt-2 text-sm leading-relaxed text-dark/70">
                  To advance gender equity by promoting women and girl's health, amplifying their voices, supporting their 
                  leadership and increasing their participation in governance and decision-making through advocacy, education, 
                  partnerships and community-driven action.
                </p>
              </div>
            </div>

            <div class="mt-6 rounded-2xl border border-accent/20 bg-cream p-6">
              <h3 class="font-display text-xl font-black text-accent">Our Core Values</h3>
              <div class="mt-3 flex flex-wrap gap-3">
                <span class="rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">Accountability</span>
                <span class="rounded-full bg-secondary/10 px-4 py-2 text-sm font-bold text-secondary">Commitment</span>
                <span class="rounded-full bg-accent/10 px-4 py-2 text-sm font-bold text-accent">Community</span>
                <span class="rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-pink-600">Empathy</span>
                <span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-600">Partnership</span>
                <span class="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-600">Transparency</span>
              </div>
              <p class="mt-3 text-sm italic text-dark/60">(ACCEPT) — Volunteers are expected to uphold and demonstrate these core values throughout their engagement.</p>
            </div>
          </div>

          <!-- Section 3: Definitions -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">3</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Definitions</h2>
            </div>
            <div class="space-y-4">
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <h4 class="font-bold text-dark">"Beneficiary"</h4>
                <p class="mt-1 text-sm text-dark/70">Any individual or community receiving support, services, training, advocacy, or assistance from WeSupportHer.</p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <h4 class="font-bold text-dark">"Confidential Information"</h4>
                <p class="mt-1 text-sm text-dark/70">Any information relating to WeSupportHer, its beneficiaries, volunteers, staff, donors, partners, programmes, finances, operations, or other non-public information acquired through volunteer service, whether or not expressly marked as confidential.</p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <h4 class="font-bold text-dark">"Organisation"</h4>
                <p class="mt-1 text-sm text-dark/70">Means WeSupportHer.</p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <h4 class="font-bold text-dark">"Volunteer"</h4>
                <p class="mt-1 text-sm text-dark/70">An individual who freely contributes time, skills, knowledge, or expertise to support the activities of WeSupportHer without expectation of financial remuneration. Volunteers are not employees and do not have an employment relationship with the Organisation. This Policy does not create, and shall not be construed to create, any contract of employment between WSH and any volunteer.</p>
              </div>
            </div>
          </div>

          <!-- Section 4: Scope -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">4</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Scope</h2>
            </div>
            <div class="rounded-2xl bg-cream p-6">
              <p class="text-sm leading-relaxed text-dark/70">
                This Policy applies to all individuals who volunteer with WeSupportHer, irrespective of the nature, duration, 
                or location of their engagement. It applies to volunteers serving on a <strong>short-term, long-term, project-based, 
                event-specific, virtual, remote, hybrid, or ad hoc basis</strong>, whether within or outside Nigeria, where such 
                activities are undertaken on behalf of WeSupportHer.
              </p>
            </div>
          </div>

          <!-- Section 5: Principles of Volunteer Engagement -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">5</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Principles of Volunteer Engagement</h2>
            </div>
            <div class="grid gap-3 sm:grid-cols-2">
              <div v-for="principle in principles" :key="principle" class="flex items-center gap-3 rounded-2xl border border-black/5 bg-cream p-4">
                <span class="text-secondary">✦</span>
                <span class="text-sm font-medium text-dark/70">{{ principle }}</span>
              </div>
            </div>
          </div>

          <!-- Section 6: Eligibility -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">6</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Eligibility</h2>
            </div>
            <div class="rounded-2xl bg-cream p-6">
              <p class="mb-4 text-sm font-bold text-dark">To become a volunteer, applicants must:</p>
              <ul class="space-y-3">
                <li v-for="item in eligibilityItems" :key="item" class="flex items-start gap-3 text-sm text-dark/70">
                  <span class="mt-1 text-secondary">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
              <p class="mt-4 text-sm italic text-dark/60">
                The Organisation reserves the right to accept or decline volunteer applications based on organisational needs.
              </p>
            </div>
          </div>

          <!-- Section 7: Recruitment and Selection -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">7</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Recruitment and Selection</h2>
            </div>
            <div class="rounded-2xl bg-cream p-6">
              <p class="mb-4 text-sm text-dark/70">
                Volunteer recruitment and selection shall be conducted fairly, transparently, and without unlawful discrimination. 
                Selection shall be based on organisational needs, suitability for the relevant role, and the volunteer's qualifications, 
                experience, skills, or demonstrated willingness to learn. It shall include:
              </p>
              <div class="flex flex-wrap gap-3">
                <span v-for="method in recruitmentMethods" :key="method" class="rounded-full bg-white px-4 py-2 text-sm font-medium text-dark/70 shadow-sm">
                  {{ method }}
                </span>
              </div>
            </div>
          </div>

          <!-- Section 8: Orientation -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">8</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Orientation</h2>
            </div>
            <div class="rounded-2xl bg-cream p-6">
              <p class="mb-4 text-sm text-dark/70">
                All volunteers shall undergo a mandatory orientation programme before commencing volunteer activities. 
                The orientation shall include but not limited to:
              </p>
              <ul class="space-y-2">
                <li v-for="item in orientationItems" :key="item" class="flex items-start gap-3 text-sm text-dark/70">
                  <span class="mt-1 text-secondary">•</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Section 9: Volunteer Responsibilities -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">9</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Volunteer Responsibilities</h2>
            </div>
            <div class="grid gap-3 md:grid-cols-2">
              <div v-for="responsibility in responsibilities" :key="responsibility" class="rounded-2xl border border-black/5 bg-cream p-4">
                <p class="text-sm text-dark/70">{{ responsibility }}</p>
              </div>
            </div>
          </div>

          <!-- Section 10: Rights of Volunteers -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">10</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Rights of Volunteers</h2>
            </div>
            <div class="grid gap-3 md:grid-cols-2">
              <div v-for="right in volunteerRights" :key="right" class="flex items-center gap-3 rounded-2xl border border-black/5 bg-cream p-4">
                <span class="text-secondary">✦</span>
                <span class="text-sm text-dark/70">{{ right }}</span>
              </div>
            </div>
          </div>

          <!-- Section 11: Confidential Information -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">11</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Confidential Information</h2>
            </div>
            <div class="space-y-4">
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Volunteers may, in the course of their engagement, have access to confidential information relating to WSH, 
                  its beneficiaries, volunteers, staff, donors, partners, programmes, organisational operations or other non-public information.
                </p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Such information shall be treated as <strong>strictly confidential</strong> and shall not be disclosed, copied, 
                  reproduced, retained, or used for any purpose other than the authorised performance of volunteer duties as approved 
                  by WSH. This obligation shall continue after the volunteer's engagement has ended for a period of <strong>two (2) years</strong>.
                </p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Upon cessation of volunteer service, volunteers shall promptly return, delete, or securely destroy all confidential 
                  documents, records, materials, equipment, and other organisational property in their possession.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 12: Organisational Property -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">12</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Organisational Property</h2>
            </div>
            <div class="space-y-4">
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Volunteers shall use organisational equipment, documents, branding, systems, and other resources solely for 
                  authorised purposes connected with their volunteer roles.
                </p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Volunteers shall exercise reasonable care in the use of organisational property and shall immediately report 
                  any loss, damage, or unauthorised use.
                </p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Upon termination of volunteer service, volunteers shall immediately return all organisational property in their 
                  possession, including identity cards, access credentials, documents, electronic devices, and other materials 
                  belonging to WSH.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 13: Harassment -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">13</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Harassment</h2>
            </div>
            <div class="space-y-4">
              <div class="rounded-2xl border-l-4 border-red-500 bg-red-50 p-5">
                <p class="text-sm font-bold text-red-700">Zero-Tolerance Policy</p>
                <p class="mt-1 text-sm text-red-600/80">
                  WSH is committed to protecting the safety, dignity, and well-being of its beneficiaries, staff, and volunteers. 
                  WSH operates a <strong>zero-tolerance approach</strong> to harassment, abuse, or exploitation of any kind, 
                  including sexual harassment, whether occurring during volunteer activities or at related events.
                </p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Volunteers shall not engage in unsupervised one-to-one interactions with minor beneficiaries and other stakeholders 
                  of the Organisation except where expressly authorised by WSH.
                </p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  <strong>Harassment includes</strong> any unwelcome physical, verbal, or non-verbal conduct of a sexual or 
                  discriminatory nature which makes a person feel uncomfortable, offended, humiliated, or intimidated. This 
                  includes, without limitation, unwanted physical contact, sexually suggestive comments or gestures, and unwanted 
                  advances, whether directed at beneficiaries, staff, or fellow volunteers.
                </p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Any volunteer who experiences or witnesses harassment, abuse, exploitation, or a concern should report it to the 
                  <strong>Director, Programs & Communications</strong> at 
                  <a href="mailto:tolu.abdul@wesupporther.org" class="text-secondary hover:underline">tolu.abdul@wesupporther.org</a> 
                  as soon as possible. Reports will be treated confidentially and investigated promptly. Volunteers will not face 
                  retaliation for reporting in good faith.
                </p>
              </div>
              <div class="rounded-2xl border border-red-200 bg-red-50 p-5">
                <p class="text-sm font-bold text-red-700">
                  ⚠️ Confirmed violations of this section will result in immediate termination of volunteer engagement. 
                  Where the conduct may constitute a criminal offence, WSH reserves the right to report the matter to law 
                  enforcement authorities.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 14: Conflict of Interest -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">14</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Conflict of Interest</h2>
            </div>
            <div class="space-y-4">
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Volunteers shall avoid any actual, potential, or perceived conflict between their personal interests and the 
                  interests of WSH.
                </p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Any such conflict shall be disclosed promptly to the relevant programme coordinator. WSH may determine and 
                  implement appropriate measures to manage or eliminate the conflict.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 15: Code of Conduct -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">15</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Code of Conduct</h2>
            </div>
            <div class="rounded-2xl border border-red-200 bg-red-50 p-6">
              <p class="mb-4 text-sm font-bold text-red-700">The following conducts are strictly prohibited:</p>
              <div class="grid gap-3 md:grid-cols-2">
                <div v-for="item in prohibitedConduct" :key="item" class="flex items-center gap-3 rounded-xl bg-white p-3">
                  <span class="text-red-500">✕</span>
                  <span class="text-sm text-dark/70">{{ item }}</span>
                </div>
              </div>
              <p class="mt-4 text-sm font-bold text-red-700">
                ⚠️ Violations may result in disciplinary action, including immediate termination of volunteer engagement.
              </p>
            </div>
          </div>

          <!-- Section 16: Social Media and Public Communication -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">16</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Social Media and Public Communication</h2>
            </div>
            <div class="space-y-4">
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Volunteers may not speak on behalf of WSH without authorisation.
                </p>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Photographs, videos, beneficiary stories, and organisational information may only be shared in accordance with 
                  approved communication guidelines and consent, as further set out in the Volunteer Agreement Form.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 17: Volunteer Expenses -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">17</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Volunteer Expenses</h2>
            </div>
            <div class="rounded-2xl bg-cream p-6">
              <p class="text-sm leading-relaxed text-dark/70">
                Volunteers are generally not entitled to financial compensation. However, approved expenses incurred while 
                carrying out authorised volunteer activities may be reimbursed subject to prior written approval, submission of 
                appropriate supporting documentation (where applicable).
              </p>
            </div>
          </div>

          <!-- Section 18: Termination of Volunteer Engagement -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">18</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Termination of Volunteer Engagement</h2>
            </div>
            <div class="space-y-4">
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="mb-3 text-sm font-bold text-dark">Volunteer engagement may be terminated:</p>
                <ul class="space-y-2">
                  <li v-for="item in terminationReasons" :key="item" class="flex items-start gap-3 text-sm text-dark/70">
                    <span class="mt-1 text-secondary">•</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div class="rounded-2xl border border-black/5 bg-cream p-5">
                <p class="text-sm leading-relaxed text-dark/70">
                  Save in cases of gross misconduct or immediate risk to beneficiaries or staff, in which case termination may be 
                  immediate and without notice, WSH will endeavour to provide reasonable notice before terminating a volunteer's 
                  engagement.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 19: Data Protection -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">19</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Data Protection</h2>
            </div>
            <div class="rounded-2xl bg-cream p-6">
              <p class="text-sm leading-relaxed text-dark/70">
                WSH collects, stores and processes personal data from volunteers, including contact details, date of birth, and 
                photographic or video content, for the purposes of volunteer administration, promotional and reporting activities. 
                This data is processed in accordance with the <strong>Nigeria Data Protection Act 2023</strong>. Volunteers may 
                withdraw consent to the use of their image or likeness at any time by notifying the relevant programme coordinator, 
                though withdrawal will not affect the lawfulness of any use prior to withdrawal.
              </p>
            </div>
          </div>

          <!-- Section 20: Intellectual Property -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">20</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Intellectual Property</h2>
            </div>
            <div class="rounded-2xl bg-cream p-6">
              <p class="text-sm leading-relaxed text-dark/70">
                Any reports, training materials, research, presentations, photographs, videos, graphics, publications, designs, 
                databases, or other work products created by a volunteer in the course of, or arising from, volunteer activities 
                for WSH shall belong exclusively to WSH, unless otherwise agreed in writing.
              </p>
            </div>
          </div>

          <!-- Section 21: Review of Policy -->
          <div class="mb-12">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">21</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Review of Policy</h2>
            </div>
            <div class="rounded-2xl bg-cream p-6">
              <p class="text-sm leading-relaxed text-dark/70">
                This Policy shall be reviewed periodically to ensure that it remains consistent with applicable laws, organisational 
                needs, and recognised best practices. WSH reserves the right to amend this Policy from time to time and shall notify 
                volunteers of any material amendments.
              </p>
            </div>
          </div>

          <!-- Section 22: Declaration -->
          <div class="mb-0">
            <div class="mb-6 flex items-center gap-4">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-black text-white">22</div>
              <h2 class="font-display text-2xl font-black text-dark md:text-3xl">Declaration</h2>
            </div>
            <div class="rounded-2xl border-l-4 border-secondary bg-soft-purple p-6">
              <p class="text-sm leading-relaxed text-dark/70">
                All volunteers are required to read, understand, and agree to abide by this Volunteer Policy as a condition 
                precedent for their engagement with WeSupportHer. Acceptance of this Policy is confirmed by the volunteer's 
                execution of the WSH Volunteer Agreement Form.
              </p>
              <div class="mt-4 rounded-xl bg-white p-4">
                <p class="text-center text-sm font-bold text-secondary">
                  By volunteering with WeSupportHer, individuals commit to upholding the mission, values, and standards of the 
                  organisation while contributing positively to the advancement of gender equity and the empowerment of women and girls.
                </p>
              </div>
            </div>
          </div>

          <!-- Download/Print Button -->
          <div class="mt-12 flex flex-col gap-4 border-t border-black/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p class="text-sm text-dark/60">
              This policy is effective as of the date of publication. Last reviewed: 2024
            </p>
            <div class="flex gap-3">
              <button 
                @click="printPolicy"
                class="rounded-xl border border-secondary/20 px-6 py-3 text-sm font-bold text-secondary transition hover:bg-secondary/5"
              >
                🖨️ Print Policy
              </button>
              <button 
                @click="downloadPDF"
                class="rounded-xl bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary"
              >
                📄 Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  title: 'Volunteer Policy | WeSupportHer',
  description: 'WeSupportHer Volunteer Policy - Framework governing the recruitment, engagement, management, supervision and conduct of volunteers.',
})

// Section 5: Principles
const principles = [
  'Respect and dignity for all volunteers, beneficiaries, staff and other stakeholders',
  'Equal opportunity and non-discrimination',
  'Transparency and accountability',
  'Safeguarding of beneficiaries and volunteers',
  'Meaningful participation',
  'Safe and supportive working environments',
  'Recognition and appreciation of volunteer contributions',
  'Alignment with the organization\'s mission, vision, and values'
]

// Section 6: Eligibility
const eligibilityItems = [
  'Meet the minimum age requirement of 18 years, or have parental/guardian consent if below 18',
  'Demonstrate an interest in gender equity and community development',
  'Complete the prescribed application and onboarding process',
  'Provide accurate and complete information throughout the application process',
  'Provide references where requested',
  'Possess the skills, experience, or willingness to learn necessary for assigned tasks',
  'Agree to comply with WSH\'s policies and procedures'
]

// Section 7: Recruitment Methods
const recruitmentMethods = [
  'Online applications',
  'Referrals',
  'Community outreach',
  'Volunteer drives',
  'Partnerships with schools, universities, and organisations'
]

// Section 8: Orientation
const orientationItems = [
  'Insights into WSH\'s mission, vision, and core values',
  'The volunteer\'s roles and responsibilities',
  'Confidentiality requirements',
  'Data protection obligations',
  'Health and safety procedures',
  'Reporting and supervision arrangements',
  'Applicable organisational policies and procedures'
]

// Section 9: Responsibilities
const responsibilities = [
  'Act professionally and respectfully',
  'Uphold the reputation of WSH',
  'Perform assigned duties diligently and responsibly',
  'Maintain confidentiality of sensitive information',
  'Comply with this Policy and other applicable organisational policies',
  'Report safeguarding concerns promptly',
  'Protect organisational property and resources',
  'Disclose any actual or potential conflict of interest',
  'Comply with applicable data protection requirements',
  'Respect beneficiaries, staff, partners, and fellow volunteers',
  'Communicate availability and limitations honestly'
]

// Section 10: Rights
const volunteerRights = [
  'Be treated with respect and dignity',
  'Receive adequate orientation and support',
  'Work in a safe environment',
  'Receive clear role descriptions',
  'Be protected from discrimination, harassment, and abuse',
  'Receive recognition for their contributions',
  'Raise concerns without fear of retaliation'
]

// Section 15: Prohibited Conduct
const prohibitedConduct = [
  'Harassment or bullying',
  'Sexual misconduct',
  'Abuse of authority',
  'Fraud or theft',
  'Misrepresentation of the Organisation',
  'Sharing Confidential Information without authorisation'
]

// Section 18: Termination Reasons
const terminationReasons = [
  'Upon completion of the volunteer assignment',
  'At the volunteer\'s request',
  'For misconduct or policy violations',
  'Where continued engagement is no longer in the Organisation\'s best interest'
]

// Actions
const printPolicy = () => {
  window.print()
}

const downloadPDF = () => {
  // Add your PDF download logic here
  alert('PDF download functionality coming soon!')
}
</script>

<style scoped>
@media print {
  .print\\:hidden {
    display: none !important;
  }
}
</style>