// src/components/Section5.jsx
import React from "react";

export default function Section5() {
  return (
    <section id="guidelines" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="max-w-2xl">
          <p
            id="guides"
            className="uppercase text-sm font-semibold text-blue-600 mb-2"
          >
            Submission Guidelines
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Follow the guidelines and download the Word template
          </h2>
          <p className="text-gray-600 mb-6">
            Ensure your abstract meets all necessary requirements.
          </p>
          <a
            href="assets/CRGC-abstract-template.docx"
            download
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Download Template
          </a>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Abstract Format */}
          <div className="bg-gray-50 border p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Abstract Format
            </h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>
                <strong>Page Layout:</strong> Abstracts should be no longer than
                one A4 page in portrait layout.
              </li>
              <li>
                <strong>Title and Authors:</strong> The title should be concise,
                bold, lower case, and centred. Co-authors and affiliations below
                the title in italics. The main author’s name underlined. The
                presenting author marked with an asterisk (*).
              </li>
              <li>
                <strong>Language and Word Limit:</strong> English only. Maximum
                300 words.
              </li>
              <li>
                <strong>Text Alignment and Spacing:</strong> Main body left
                aligned. Single spacing throughout.
              </li>
            </ul>
          </div>

          {/* Structure Content */}
          <div className="bg-gray-50 border p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Structure Content
            </h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Background & objectives</li>
              <li>Methods</li>
              <li>Results</li>
              <li>Conclusion & implications</li>
              <li>Keywords (3–5)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
