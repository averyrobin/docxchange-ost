import React, { useState } from 'react';

const OpportunitySolutionTree = () => {
  const [exp, setExp] = useState({ outcome: true, so1: true, so2: true, so3: true });
  const [sel, setSel] = useState(null);
  const toggle = (id) => setExp(p => ({ ...p, [id]: !p[id] }));
  const isOpen = (id) => exp[id] === true;

  const k = {
    outcome: { bg: '#0B2545', text: '#FFF', border: '#0B2545' },
    suboutcome: { bg: '#1E3A5F', text: '#FFF', border: '#1E3A5F' },
    opportunity: { bg: '#7C3AED', text: '#FFF', border: '#7C3AED' },
    solution: { bg: '#13A89E', text: '#FFF', border: '#13A89E' },
    experiment: { bg: '#F59E0B', text: '#FFF', border: '#F59E0B' },
    assumption: { bg: '#EF4444', text: '#FFF', border: '#EF4444' },
    text: '#1B2A4A', ts: '#5A6B8A', tm: '#8E99AE', border: '#E2E8F0', bl: '#F0F3F7', white: '#FFF', surface: '#FAFBFC',
  };

  const tree = {
    id: 'outcome', type: 'outcome',
    title: "Establish a DocXchange capability that increases the value proposition of nCino's platform and digital experiences",
    subtitle: "Document collection is the most externally visible part of the onboarding platform. Done right, DocXchange becomes a reason FIs choose nCino \u2014 and a reason they stay.",
    metrics: ['Digital Experience attach rate on Commercial Onboarding deals', 'Pre-sales win rate on deals where DocXchange is demoed', 'Net new FIs enabled for DocXchange', 'CC+ licenses retired through portal migration'],
    children: [
      { id: 'so1', type: 'suboutcome',
        title: 'Increase FI adoption of Digital Experiences',
        subtitle: "More FIs buy or enable a Digital Experience because DocXchange makes it worth the investment. DocXchange becomes a compelling reason to add DE to any onboarding deal.",
        metrics: ['# FIs that add DE to existing Commercial Onboarding', '# new deals where DE is included because of DocXchange', 'Time from DE purchase to first DocXchange request sent'],
        children: [
          { id: 'o1', type: 'opportunity', title: "FIs with Commercial Onboarding can't use DocXchange without Business Digital Experience",
            evidence: 'Hannah Marks research, Q2 2026 committed customer, Salesforce licensing cost barrier', who: 'Commercial bankers at Consumer DE-only FIs, FI admins, implementation consultants, pre-sales',
            children: [
              { id: 's1a', type: 'solution', title: 'Decouple DocXchange from Business Banking API \u2014 make it work on Consumer DE alone', priority: 'P0', children: [
                { id: 'e1a1', type: 'experiment', title: 'Engineering spike: can banker-initiated DocXchange run on Consumer Banking API alone?' },
                { id: 'e1a2', type: 'experiment', title: 'Validate end-to-end on Consumer DE-only sandbox: request \u2192 email \u2192 login \u2192 upload \u2192 filing' },
                { id: 'a1a1', type: 'assumption', title: 'The dependency is architectural, not just configuration' },
                { id: 'a1a2', type: 'assumption', title: 'FIs blocked by this will adopt DocXchange once unblocked' },
                { id: 'a1a3', type: 'assumption', title: "Removing the dependency won't break existing Business DE implementations" },
              ]},
              { id: 's1b', type: 'solution', title: 'Eliminate Salesforce user licensing burden \u2014 no need to provision users across multiple APIs', priority: 'P0', children: [
                { id: 'e1b1', type: 'experiment', title: 'Survey implementation consultants: how many FIs cite SF licensing as a blocker?' },
                { id: 'a1b1', type: 'assumption', title: 'SF licensing cost is a meaningful blocker, not minor friction' },
              ]},
              { id: 's1c', type: 'solution', title: 'Confirm product packaging \u2014 DocXchange entitlement without separate Business DE purchase', priority: 'P0', children: [
                { id: 'a1c1', type: 'assumption', title: 'No licensing conflicts or unintended feature exposure' },
              ]},
            ]},
          { id: 'o2', type: 'opportunity', title: 'DocXchange configuration is complex and inconsistent \u2014 heavy implementation support needed',
            evidence: 'Expected behavior review ("3 or 4 different ways this shows up"), duplicate placeholders, Priority Manager vs. Smart Checklist', who: 'FI administrators, implementation consultants, Solutions team',
            children: [
              { id: 's2a', type: 'solution', title: 'Default-enable placeholders \u2014 reduce per-onboarding config to zero for standard docs', priority: 'P1', children: [
                { id: 'a2a1', type: 'assumption', title: 'Most FIs want the same core set of placeholders portal-enabled by default' },
              ]},
              { id: 's2b', type: 'solution', title: 'Standardize on Priority Manager (deprecate Smart Checklist path)', priority: 'P1', children: [
                { id: 'a2b1', type: 'assumption', title: 'Priority Manager has full parity (confirmed by Matthew Carroll)' },
              ]},
              { id: 's2c', type: 'solution', title: 'Fix duplicate placeholder creation during feature enablement on existing orgs', priority: 'P1', children: [
                { id: 'e2c1', type: 'experiment', title: 'Measure: how many support tickets stem from duplicate placeholders?' },
              ]},
            ]},
        ]},
      { id: 'so2', type: 'suboutcome',
        title: 'Differentiate nCino against competitors in onboarding deals',
        subtitle: "DocXchange becomes a capability no competitor can match \u2014 combining banker-initiated requests, AI-powered routing, document validation, and a unified client portal within a single workflow.",
        metrics: ['Competitive win rate where DocXchange is part of the pitch', 'Pre-sales NPS on DocXchange demo', 'Feature gap vs. Blend, Temenos, Finastra'],
        children: [
          { id: 'o3', type: 'opportunity', title: 'Uploading documents is tedious and error-prone \u2014 clients must know which file goes where',
            evidence: 'PDI-00020990, Locate & File in Banking Advisor, DocXchange flow doc shows 10+ complex scenarios', who: 'All clients, especially multi-entity onboarding + lending (15+ docs)',
            children: [
              { id: 's3a', type: 'solution', title: 'Bulk upload with AI-powered routing via Locate & File \u2014 drop all files, Banking Advisor sorts them', priority: 'P2', children: [
                { id: 'e3a1', type: 'experiment', title: 'Prototype test: bulk upload + reconciliation with 5 clients \u2014 do they trust AI matching?' },
                { id: 'e3a2', type: 'experiment', title: 'Accuracy test: Locate & File on 15-doc commercial scenario \u2014 what % correct?' },
                { id: 'e3a3', type: 'experiment', title: 'Time comparison: per-placeholder upload vs. bulk AI for same doc set' },
                { id: 'a3a1', type: 'assumption', title: 'Clients will trust AI classification enough to use bulk upload as primary path' },
                { id: 'a3a2', type: 'assumption', title: 'Locate & File can match to year-specific placeholders, not just doc type' },
                { id: 'a3a3', type: 'assumption', title: 'Reconciliation/review step gives clients enough control to correct mistakes' },
              ]},
              { id: 's3b', type: 'solution', title: 'AI document validation \u2014 confirm doc type, legibility, expiration, correct year at upload time', priority: 'P2', children: [
                { id: 'e3b1', type: 'experiment', title: 'Analyze: what % of rejections are for wrong doc type or year? Could AI catch them?' },
                { id: 'a3b1', type: 'assumption', title: 'A significant portion of rejections are preventable with upload-time validation' },
              ]},
              { id: 's3c', type: 'solution', title: 'AI data pre-fill \u2014 extract data from docs to populate onboarding fields', priority: 'P2', children: [
                { id: 'e3c1', type: 'experiment', title: 'POC: extract EIN, business name, address from Articles of Incorporation' },
                { id: 'a3c1', type: 'assumption', title: 'Extracted data is accurate enough to pre-fill without compliance risk' },
              ]},
              { id: 's3d', type: 'solution', title: 'Upload without placeholder \u2014 docs land in file staging for banker or AI routing', priority: 'P2', children: [
                { id: 'a3d1', type: 'assumption', title: 'Clients have docs the banker needs but no placeholder was configured' },
              ]},
            ]},
          { id: 'o4', type: 'opportunity', title: 'Bankers manually build ownership structures even though the data already exists in the documents they are collecting',
            evidence: 'Commercial Onboarding roadmap FUTURE: "automatically build out ownership structure to determine UBOs", Banking Advisor HITL relationship creation capability, formation docs (Operating Agreement, Org Chart, BO Certification) contain all ownership data',
            who: 'Commercial bankers (manual data entry per onboarding), BSA/AML analysts (verify ownership accuracy), compliance teams (need audit trail for ownership determination)',
            children: [
              { id: 's4x1', type: 'solution', title: 'Document-driven ownership structure \u2014 Banking Advisor extracts ownership data from formation docs uploaded via DocXchange and proposes Related Parties tree', priority: 'P2', children: [
                { id: 'e4x1', type: 'experiment', title: 'POC: extract ownership percentages, officer names, and entity relationships from Operating Agreement using Banking Advisor' },
                { id: 'e4x2', type: 'experiment', title: 'Compare: time to build ownership structure manually vs. AI-proposed structure from documents (same 4-entity scenario)' },
                { id: 'e4x3', type: 'experiment', title: 'Test with 3 bankers: does reviewing an AI-proposed ownership tree feel faster and more reliable than manual entry?' },
                { id: 'a4x1', type: 'assumption', title: 'Operating Agreements and Org Charts contain enough structured data for AI to extract ownership accurately' },
                { id: 'a4x2', type: 'assumption', title: 'Bankers will trust AI-proposed ownership structures enough to confirm rather than rebuild manually' },
                { id: 'a4x3', type: 'assumption', title: 'Compliance teams will accept AI-extracted ownership data if there is a clear audit trail back to the source document' },
              ]},
              { id: 's4x2', type: 'solution', title: 'Pre-meeting doc request workflow \u2014 banker sends DocXchange request for formation docs before the first client meeting, ownership structure is ready when they sit down', priority: 'P2', children: [
                { id: 'e4x4', type: 'experiment', title: 'Interview 5 commercial bankers: would they send a doc request before the first meeting if it meant ownership was pre-built?' },
                { id: 'a4x4', type: 'assumption', title: 'Bankers will change their workflow to request docs before the first meeting (vs. collecting in-branch or after)' },
                { id: 'a4x5', type: 'assumption', title: 'Clients will upload formation docs in advance if the banker explains the benefit' },
              ]},
            ]},
          { id: 'o5', type: 'opportunity', title: 'Bankers and clients waste time on back-and-forth about status, rejections, and follow-ups',
            evidence: 'PDI-00020980, PDI-00020981, PDI-00021322, PDI-00022226, OMNI-2121\u20132124, 49-day avg onboarding, 56% drop-off', who: 'Commercial bankers (daily), clients (rejection confusion), compliance (audit trail)',
            children: [
              { id: 's4a', type: 'solution', title: 'Rejection reasons visible to clients with inline re-upload prompt', priority: 'P1', children: [
                { id: 'e4a1', type: 'experiment', title: 'Measure: rejection-related calls/emails per banker per week' },
                { id: 'a4a1', type: 'assumption', title: 'Showing reasons reduces round-trip communication by >50%' },
              ]},
              { id: 's4b', type: 'solution', title: 'Banker nudge/reminder with deadline, urgency, and custom message', priority: 'P1', children: [
                { id: 'e4b1', type: 'experiment', title: 'Prototype nudge flow with 3 implementation consultants' },
                { id: 'e4b2', type: 'experiment', title: 'Client test: do deadlines + urgent badges change upload speed?' },
                { id: 'a4b1', type: 'assumption', title: 'Structured nudge saves time vs. phone/email follow-up' },
                { id: 'a4b2', type: 'assumption', title: 'Deadlines motivate without creating negative pressure' },
              ]},
              { id: 's4c', type: 'solution', title: 'Client login activity visible to banker', priority: 'P1', children: [
                { id: 'a4c1', type: 'assumption', title: 'Bankers need to know if client has seen the request before following up' },
              ]},
              { id: 's4d', type: 'solution', title: 'Consolidated requests across levels with single email', priority: 'P1', children: [
                { id: 'a4d1', type: 'assumption', title: 'Multiple emails per request meaningfully confuses clients' },
              ]},
              { id: 's4e', type: 'solution', title: 'Year/period metadata on placeholders ("Tax Return \u2014 2024")', priority: 'P1', children: [
                { id: 'e4e1', type: 'experiment', title: 'Analyze rejection data: how often are wrong-year docs uploaded?' },
              ]},
            ]},
        ]},
      { id: 'so3', type: 'suboutcome',
        title: 'Reduce FI dependency on legacy Salesforce Customer Portal',
        subtitle: 'FIs on the legacy portal migrate to DocXchange with confidence, eliminating CC+ licensing costs and gaining a modern, mobile-friendly experience.',
        metrics: ['# FIs migrated from SF Portal to DocXchange', 'CC+ licenses retired', 'Support ticket reduction', 'Implementation hours per DocXchange setup'],
        children: [
          { id: 'o6', type: 'opportunity', title: "Clients can't see all their document tasks in one place \u2014 portal mirrors internal data model",
            evidence: "PDI-00021166, PDI-00017705, PDI-00021943, Josh Forrester (\"FI wouldn't go live\"), Five Star, People's Trust", who: 'Business clients, beneficial owners, bankers fielding confused calls',
            children: [
              { id: 's5a', type: 'solution', title: 'Consolidated task view \u2014 single page for all docs across relationship, loan, collateral', priority: 'P1', children: [
                { id: 'e5a1', type: 'experiment', title: 'Prototype test with 3\u20135 FI clients: does consolidated view reduce confusion?' },
                { id: 'e5a2', type: 'experiment', title: 'A/B: completion rate \u2014 consolidated vs. per-application navigation' },
                { id: 'a5a1', type: 'assumption', title: 'Clients prefer all docs in one place vs. organized by application' },
                { id: 'a5a2', type: 'assumption', title: 'Grouping by entity is the right mental model for clients' },
              ]},
              { id: 's5b', type: 'solution', title: 'Dashboard navigation fix \u2014 bookmark/direct URL access without email link', priority: 'P1', children: [
                { id: 'e5b1', type: 'experiment', title: 'Track: % of clients arriving via email link vs. direct URL today' },
                { id: 'a5b1', type: 'assumption', title: 'Clients frequently lose or can\'t find the original email link' },
              ]},
              { id: 's5c', type: 'solution', title: 'Channel-specific doc visibility \u2014 FIs control digital vs. in-branch', priority: 'P1', children: [
                { id: 'e5c1', type: 'experiment', title: 'Five Star Bank: gather requirements and validate with prototype' },
                { id: 'a5c1', type: 'assumption', title: 'FIs want per-document control, not all-or-nothing' },
              ]},
            ]},
          { id: 'o7', type: 'opportunity', title: 'DocXchange missing parity with legacy portal \u2014 FIs can\'t migrate without losing capabilities',
            evidence: 'Feature Comparison doc (12+ gaps, 2 blockers, 6 critical), PDI-00019154, PDI-00021322, hard-coded noreply email', who: 'FI admins evaluating migration, implementation consultants',
            children: [
              { id: 's6a', type: 'solution', title: 'Documents flow to Documents route in BOS', priority: 'P1', children: [
                { id: 'a6a1', type: 'assumption', title: 'Hard requirement for every migration, not a nice-to-have' },
              ]},
              { id: 's6b', type: 'solution', title: 'Configurable sender email (FI domain instead of noreply@omni.ncino.com)', priority: 'P1', children: [
                { id: 'e6b1', type: 'experiment', title: 'Survey: how many FIs report DocXchange emails landing in spam?' },
              ]},
              { id: 's6c', type: 'solution', title: 'External placeholder names \u2014 client-friendly labels', priority: 'P1', children: [
                { id: 'a6c1', type: 'assumption', title: 'Internal names surface to clients and cause confusion' },
              ]},
              { id: 's6d', type: 'solution', title: 'Client can view/download FI-uploaded docs (disclosures, templates)', priority: 'P1', children: [
                { id: 'a6d1', type: 'assumption', title: 'FIs need bidirectional sharing, not just client-to-banker' },
              ]},
              { id: 's6e', type: 'solution', title: 'Bulk portal enable sends single consolidated email', priority: 'P1', children: [
                { id: 'a6e1', type: 'assumption', title: 'Multiple emails per bulk enable confuses clients' },
              ]},
              { id: 's6f', type: 'solution', title: 'E-Consent capture at portal registration', priority: 'P1', children: [
                { id: 'e6f1', type: 'experiment', title: 'PDI-00005405 (18 cases) \u2014 interview 3 FIs on consent workflow' },
              ]},
            ]},
        ]},
    ],
  };

  const Node = ({ node, depth = 0 }) => {
    const cfg = { outcome: { label: 'OUTCOME', c: k.outcome }, suboutcome: { label: 'SUB-OUTCOME', c: k.suboutcome }, opportunity: { label: 'OPPORTUNITY', c: k.opportunity }, solution: { label: node.priority ? `SOLUTION (${node.priority})` : 'SOLUTION', c: k.solution }, experiment: { label: 'EXPERIMENT', c: k.experiment }, assumption: { label: 'ASSUMPTION TO TEST', c: k.assumption } }[node.type] || { label: 'NODE', c: k.solution };
    const has = node.children && node.children.length > 0;
    const open = isOpen(node.id);
    const isSel = sel === node.id;
    const pc = { P0: '#EF4444', P1: '#F59E0B', P2: '#6366F1' };

    return (
      <div style={{ marginBottom: depth <= 1 ? 0 : 6 }}>
        <div onClick={() => { if (has) toggle(node.id); setSel(isSel ? null : node.id); }} style={{ padding: depth === 0 ? '16px 20px' : depth === 1 ? '14px 18px' : '10px 14px', borderRadius: 10, backgroundColor: isSel ? `${cfg.c.bg}08` : k.white, border: `2px solid ${isSel ? cfg.c.border : k.border}`, cursor: 'pointer', transition: 'all 0.15s' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            {has ? <span style={{ color: k.tm, fontSize: 14, marginTop: 2, transform: open ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.2s', display: 'inline-block', flexShrink: 0 }}>{'\u203A'}</span> : <span style={{ width: 14, flexShrink: 0 }} />}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4, flexWrap: 'wrap' }}>
                <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 9, fontWeight: 700, backgroundColor: cfg.c.bg, color: cfg.c.text, letterSpacing: '0.06em' }}>{cfg.label}</span>
                {node.priority && <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 9, fontWeight: 700, backgroundColor: pc[node.priority], color: '#FFF' }}>{node.priority}</span>}
                {has && <span style={{ fontSize: 11, color: k.tm }}>({node.children.length})</span>}
              </div>
              <p style={{ fontSize: depth <= 1 ? 15 : 13, fontWeight: depth <= 1 ? 600 : 500, color: k.text, margin: 0, lineHeight: 1.4 }}>{node.title}</p>
              {node.subtitle && !isSel && <p style={{ fontSize: 12, color: k.ts, margin: '4px 0 0', lineHeight: 1.4 }}>{node.subtitle}</p>}
              {isSel && (
                <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid ${k.bl}` }}>
                  {node.subtitle && <p style={{ fontSize: 12, color: k.ts, margin: '0 0 8px', lineHeight: 1.5 }}>{node.subtitle}</p>}
                  {node.metrics && <div style={{ marginBottom: 8 }}><p style={{ fontSize: 10, fontWeight: 700, color: k.tm, textTransform: 'uppercase', margin: '0 0 4px' }}>Key Metrics</p>{node.metrics.map((m,i) => <p key={i} style={{ fontSize: 12, color: k.ts, margin: '2px 0', paddingLeft: 10 }}>{'\u2022'} {m}</p>)}</div>}
                  {node.evidence && <div style={{ marginBottom: 8 }}><p style={{ fontSize: 10, fontWeight: 700, color: k.tm, textTransform: 'uppercase', margin: '0 0 4px' }}>Evidence</p><p style={{ fontSize: 12, color: k.ts, margin: 0, lineHeight: 1.5 }}>{node.evidence}</p></div>}
                  {node.who && <div><p style={{ fontSize: 10, fontWeight: 700, color: k.tm, textTransform: 'uppercase', margin: '0 0 4px' }}>Who</p><p style={{ fontSize: 12, color: k.ts, margin: 0, lineHeight: 1.5 }}>{node.who}</p></div>}
                </div>
              )}
            </div>
          </div>
        </div>
        {has && open && <div style={{ marginLeft: depth === 0 ? 16 : 20, paddingLeft: 16, borderLeft: `2px solid ${cfg.c.border}25`, marginTop: 8 }}>{node.children.map(ch => <Node key={ch.id} node={ch} depth={depth + 1} />)}</div>}
      </div>
    );
  };

  const count = (n, t) => { let c = n.type === t ? 1 : 0; if (n.children) n.children.forEach(ch => { c += count(ch, t); }); return c; };

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", backgroundColor: k.surface, minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      <div style={{ backgroundColor: k.outcome.bg, padding: '24px 24px 32px', color: 'white' }}>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Opportunity Solution Tree {'\u00B7'} Teresa Torres Framework</p>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 6px', fontFamily: "'Instrument Serif', Georgia, serif", lineHeight: 1.3 }}>DocXchange: Increasing the Value of nCino's Platform & Digital Experiences</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '0 0 16px' }}>Consumer & Commercial Banking {'\u00B7'} Onboarding, Lending, & Ongoing Relationship Management</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {[['suboutcome','Sub-Outcomes'],['opportunity','Opportunities'],['solution','Solutions'],['experiment','Experiments'],['assumption','Assumptions']].map(([t,l]) => (
            <div key={t} style={{ padding: '5px 12px', borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: k[t]?.bg || '#FFF' }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{count(tree, t)} {l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '10px 24px', backgroundColor: '#F0F3FF', borderBottom: `1px solid ${k.border}`, fontSize: 12, color: k.ts }}>
        Click nodes to see details {'\u00B7'} Arrows expand/collapse {'\u00B7'}
        <span style={{ color: k.suboutcome.bg, fontWeight: 600 }}> Sub-Outcomes</span> {'\u2192'}
        <span style={{ color: k.opportunity.bg, fontWeight: 600 }}> Opportunities</span> {'\u2192'}
        <span style={{ color: k.solution.bg, fontWeight: 600 }}> Solutions</span> {'\u2192'}
        <span style={{ color: k.experiment.bg, fontWeight: 600 }}> Experiments</span> /
        <span style={{ color: k.assumption.bg, fontWeight: 600 }}> Assumptions</span>
      </div>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '24px 20px' }}><Node node={tree} /></div>
    </div>
  );
};

export default OpportunitySolutionTree;
