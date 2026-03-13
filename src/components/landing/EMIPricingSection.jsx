import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, Zap, Calendar, ChevronDown, ChevronUp, Shield, Star } from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────────────────────

import { courseData } from '../../data/coursesData';

// ─── Data Transformers ──────────────────────────────────────────────────────

const parseK = (str) => {
  if (!str || str === '-') return 0;
  return parseFloat(str.replace('k', '')) * 1000;
};

const formatPrice = (num) => `₹${num.toLocaleString()}`;

const generatePlansForCourse = (course) => {
  return course.paymentPlans.map((pp, index) => {
    const isPlanA = index === 0;
    const isPlanB = index === 1;
    
    const m1Value = parseK(pp.m1);
    const startAmount = pp.registration + m1Value;

    if (isPlanA) {
      return {
        id: `full-${course.id}`,
        label: 'Full Payment',
        badge: 'Best Value',
        badgeColor: 'bg-gradient-to-r from-amber-400 to-orange-500',
        highlight: true,
        icon: Zap,
        iconBg: 'from-amber-400 to-orange-500',
        originalPrice: formatPrice(course.originalPrice),
        offerPrice: formatPrice(pp.total),
        savings: `Save ${formatPrice(course.originalPrice - pp.total)}`,
        tagline: 'One-time payment · Lowest price guaranteed',
        cta: `Pay ${formatPrice(pp.total)} Now`,
        ctaStyle: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600 shadow-amber-500/30',
        breakdown: [
          { label: 'Registration Fee', value: formatPrice(pp.registration) },
          { label: 'Course Fees (Original)', value: formatPrice(course.originalPrice), strike: true },
          { label: 'Offer Price', value: formatPrice(pp.total) },
          { label: 'Total Payable', value: formatPrice(pp.total), highlight: true },
          { label: 'You Save', value: formatPrice(course.originalPrice - pp.total), green: true },
        ],
        features: [
          'Lowest overall cost',
          'Immediate full access',
          'Certificate of completion',
          'Lifetime course access',
          'Priority placement support',
        ],
      };
    } else if (isPlanB) {
      return {
        id: `emi3-${course.id}`,
        label: '3-Month EMI',
        badge: null,
        highlight: false,
        icon: Calendar,
        iconBg: 'from-blue-500 to-cyan-500',
        originalPrice: null,
        offerPrice: `${formatPrice(m1Value)}/mo`,
        savings: `Total payable ${formatPrice(pp.total)}`,
        tagline: `Start your journey with just ${formatPrice(startAmount)}`,
        cta: `Start with ${formatPrice(startAmount)}`,
        ctaStyle: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-blue-500/30',
        breakdown: [
          { label: 'Registration Fee', value: formatPrice(pp.registration) },
          // { label: 'Down Payment', value: formatPrice(m1Value) },
          { label: 'EMI × 3 months', value: `${formatPrice(m1Value)} ` },
          { label: 'Total Payable', value: formatPrice(pp.total), highlight: true },
        ],
        features: [
          `Start with ${formatPrice(startAmount)} today`,
          'Spread cost over 3 months',
          'Full access from day 1',
          'Certificate of completion',
          'Placement assistance',
        ],
      };
    } else {
      return {
        id: `emi6-${course.id}`,
        label: '6-Month EMI',
        badge: 'Flexible',
        badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
        highlight: false,
        icon: CreditCard,
        iconBg: 'from-purple-500 to-pink-500',
        originalPrice: null,
        offerPrice: `${formatPrice(m1Value)}/mo`,
        savings: `Total payable ${formatPrice(pp.total)}`,
        tagline: `Start your journey with just ${formatPrice(startAmount)}`,
        cta: `Start with ${formatPrice(startAmount)}`,
        ctaStyle: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-purple-500/30',
        breakdown: [
          { label: 'Registration Fee', value: formatPrice(pp.registration) },
          // { label: 'Advance Payment', value: formatPrice(m1Value) },
          { label: 'EMI × 6 months', value: `${formatPrice(m1Value)} ` },
          { label: 'Total Payable', value: formatPrice(pp.total), highlight: true },
        ],
        features: [
          'Lowest monthly outflow',
          'Spread cost over 6 months',
          'Full access from day 1',
          'Certificate of completion',
          'Placement assistance',
        ],
      };
    }
  });
};

// ─── EMI Breakdown Modal ─────────────────────────────────────────────────────

function BreakdownModal({ plan, onClose }) {
  if (!plan) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Card */}
      <div
        className="relative z-10 w-full max-w-md bg-[#0D1E35] border border-white/10 rounded-3xl shadow-2xl p-8 animate-[fadeUp_0.25s_ease_both]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${plan.iconBg} text-white text-sm font-bold mb-4`}>
          <plan.icon className="w-4 h-4" />
          {plan.label} — Breakdown
        </div>

        <h3 className="text-2xl font-bold text-white mb-6">Payment Details</h3>

        {/* Breakdown Table */}
        <div className="space-y-3 mb-6">
          {plan.breakdown.map((row, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-3 rounded-xl ${
                row.highlight
                  ? 'bg-white/10 border border-white/20'
                  : 'bg-white/5'
              }`}
            >
              <span className={`text-sm font-medium ${row.highlight ? 'text-white' : 'text-blue-200'}`}>
                {row.label}
              </span>
              <span
                className={`font-bold text-base ${
                  row.strike
                    ? 'line-through text-gray-500'
                    : row.green
                    ? 'text-green-400'
                    : row.highlight
                    ? 'text-white'
                    : 'text-blue-200'
                }`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className={`w-full py-3.5 rounded-xl font-bold text-base shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${plan.ctaStyle}`}
        >
          {plan.cta}
        </button>

        <p className="text-xs text-center text-blue-300 mt-3 opacity-70">
          * No hidden charges. All amounts are inclusive of GST.
        </p>
      </div>
    </div>
  );
}

// ─── Single Plan Card ────────────────────────────────────────────────────────

function PlanCard({ plan, onViewBreakdown }) {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const Icon = plan.icon;

  return (
    <div
      onClick={() => onViewBreakdown(plan)}
      className={`relative flex flex-col rounded-3xl border transition-all duration-500 group cursor-pointer
        ${
          plan.highlight
            ? 'bg-gradient-to-b from-[#0D1E35] to-[#091829] border-amber-500/40 shadow-2xl shadow-amber-500/10 lg:scale-105 z-10'
            : 'bg-[#0D1E35] border-white/10 shadow-xl hover:border-white/25 hover:shadow-2xl hover:shadow-blue-900/20'
        }
        hover:-translate-y-1.5`}
    >
      {/* Best Value Ribbon */}
      {plan.badge && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-white text-xs font-bold shadow-lg ${plan.badgeColor} whitespace-nowrap`}>
          ★ {plan.badge}
        </div>
      )}

      <div className="p-7 flex flex-col flex-1 gap-5 mt-2">
        {/* Icon + Plan Name */}
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.iconBg} flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Payment Plan</p>
            <h3 className="text-lg font-bold text-white leading-tight">{plan.label}</h3>
          </div>
        </div>

        {/* Price Block */}
        <div>
          {plan.originalPrice && (
            <p className="text-sm text-gray-400 line-through mb-0.5">{plan.originalPrice}</p>
          )}
          <div className="flex items-end gap-3 flex-wrap">
            <span className="text-4xl font-extrabold text-white tracking-tight leading-none">
              {plan.offerPrice}
            </span>
          </div>
          <p className={`mt-1.5 text-sm font-semibold ${plan.highlight ? 'text-amber-400' : 'text-green-400'}`}>
            {plan.savings}
          </p>
          <p className="text-xs text-blue-300 mt-1 opacity-80">{plan.tagline}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Features */}
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFeaturesOpen(!featuresOpen);
            }}
            className="flex items-center justify-between w-full text-sm text-blue-300 font-semibold mb-2 hover:text-white transition-colors"
          >
            <span>What's included</span>
            {featuresOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {/* Always show on md+, toggle on mobile */}
          <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${featuresOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 md:max-h-80 md:opacity-100'}`}>
            {plan.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-blue-200">
                <CheckCircle className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-amber-400' : 'text-green-400'}`} />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Breakdown link */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewBreakdown(plan);
          }}
          className="text-xs text-blue-400 hover:text-blue-200 underline underline-offset-2 transition-colors text-center py-2"
        >
          View full payment breakdown
        </button>

        {/* CTA */}
        <button
          onClick={(e) => e.stopPropagation()}
          className={`w-full py-3.5 rounded-xl font-bold text-base shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${plan.ctaStyle}`}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────

const EMIPricingSection = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(courseData[0].id);
  const [modalPlan, setModalPlan] = useState(null);

  const selectedCourse = courseData.find(c => c.id === selectedCourseId) || courseData[0];
  const dynamicPlans = generatePlansForCourse(selectedCourse);
  const maxSavings = selectedCourse.originalPrice - selectedCourse.paymentPlans[0].total;

  return (
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-400/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Flexible Payment Options
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1F2937] tracking-tight mb-4">
            Invest in Your{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Future
            </span>
          </h2>

          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your budget. Same world-class training — flexible payments designed for you.
          </p>

          {/* Original price callout */}
          <div className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm text-sm text-gray-600">
            <Star className="w-4 h-4 text-amber-500" />
            Original Course Fees:&nbsp;
            <span className="line-through text-gray-400">₹{selectedCourse.originalPrice?.toLocaleString()}</span>
            &nbsp;·&nbsp;
            <span className="text-green-600 font-bold">Save up to ₹{maxSavings.toLocaleString()}</span>
          </div>
        </div>

        {/* Course Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 mb-12">
          {courseData.map((course) => (
            <button
              key={course.id}
              onClick={() => setSelectedCourseId(course.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-sm border
                ${selectedCourseId === course.id 
                  ? 'bg-[#0D1E35] text-white border-[#0D1E35] shadow-xl scale-105' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
            >
              {course.shortTitle}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {dynamicPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onViewBreakdown={setModalPlan} />
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B7280]">
          {[
            { icon: Shield, text: 'No hidden charges' },
            { icon: CheckCircle, text: 'Secure enrollment' },
            { icon: Star, text: 'Rated 4.9/5 by 2,000+ students' },
            { icon: CreditCard, text: 'All major cards accepted' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-blue-500" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* EMI Breakdown Modal */}
      {modalPlan && (
        <BreakdownModal plan={modalPlan} onClose={() => setModalPlan(null)} />
      )}

      {/* Keyframe for modal animation */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default EMIPricingSection;
