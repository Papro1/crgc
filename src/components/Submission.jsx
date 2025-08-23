import { useState } from "react";

export default function Submission() {
  const [step, setStep] = useState(0);

  const steps = [1, 2, 3];

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <section
      id="abstract-form"
      className="py-20 bg-gray-50"
      aria-labelledby="abstitle"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p
          id="abstitle"
          className="uppercase text-sm font-semibold text-blue-600"
        >
          Abstract Submission
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Soumission d'abstract – Climarys @ CRGC
        </h2>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex-1 h-2 mx-1 rounded-full ${
                i <= step ? "bg-blue-600" : "bg-gray-200"
              }`}
            ></div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Abstract submitted ✅");
          }}
          className="bg-white shadow rounded-2xl p-8 space-y-6"
        >
          {/* STEP 1 */}
          {step === 0 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="a_name" className="block font-medium">
                    Main author (underline) *
                  </label>
                  <input
                    id="a_name"
                    name="author"
                    type="text"
                    required
                    className="w-full border rounded-lg p-3"
                  />
                </div>
                <div>
                  <label htmlFor="a_email" className="block font-medium">
                    Email *
                  </label>
                  <input
                    id="a_email"
                    name="email"
                    type="email"
                    required
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="a_aff" className="block font-medium">
                    Affiliation(s) (italics) *
                  </label>
                  <input
                    id="a_aff"
                    name="affiliations"
                    type="text"
                    required
                    className="w-full border rounded-lg p-3"
                  />
                </div>
                <div>
                  <label htmlFor="a_presenting" className="block font-medium">
                    Presenting author *
                  </label>
                  <select
                    id="a_presenting"
                    name="presenting"
                    required
                    className="w-full border rounded-lg p-3"
                  >
                    <option value="">-- Select --</option>
                    <option value="self">Self (main author)</option>
                    <option value="co">Co-author</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="a_title" className="block font-medium">
                  Title (concise, bold, lower case, centred) *
                </label>
                <input
                  id="a_title"
                  name="title"
                  type="text"
                  required
                  className="w-full border rounded-lg p-3"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="a_theme" className="block font-medium">
                    Theme *
                  </label>
                  <select
                    id="a_theme"
                    name="theme"
                    required
                    className="w-full border rounded-lg p-3"
                  >
                    <option value="">-- Select a theme --</option>
                    <option>
                      Impacts différenciés du changement climatique et
                      diagnostics territoriaux
                    </option>
                    <option>
                      Résilience et planification stratégique des politiques
                      publiques
                    </option>
                    <option>
                      Innovation scientifique et technologique pour l’adaptation
                      et la prévision climatique
                    </option>
                    <option>Gouvernance climatique et financement vert</option>
                    <option>
                      Partenariats stratégiques pour la résilience climatique
                    </option>
                    <option>
                      Jeunesse, société civile et engagement citoyen
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="a_keywords" className="block font-medium">
                    Keywords (3–5)
                  </label>
                  <input
                    id="a_keywords"
                    name="keywords"
                    type="text"
                    placeholder="e.g. adaptation; drought; modeling"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="a_text" className="block font-medium">
                  Abstract (≤ 300 words) *
                </label>
                <textarea
                  id="a_text"
                  name="abstract"
                  maxLength={2400}
                  rows="6"
                  required
                  className="w-full border rounded-lg p-3"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Max ~300 words ≈ 2400 characters.
                </p>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="a_file" className="block font-medium">
                    Upload (optional DOC/DOCX/PDF, 1 page)
                  </label>
                  <input
                    id="a_file"
                    name="file"
                    type="file"
                    accept=".doc,.docx,.pdf"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
                <div>
                  <label htmlFor="a_notes" className="block font-medium">
                    Notes to Committee
                  </label>
                  <input
                    id="a_notes"
                    name="notes"
                    type="text"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <input
                  id="consentAbs"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1"
                />
                <label
                  htmlFor="consentAbs"
                  className="text-gray-600 text-sm"
                >
                  I confirm this abstract is original and I agree to publication
                  in the conference proceedings.
                </label>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between pt-6">
            {step > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Précédent
              </button>
            )}
            {step < steps.length - 1 && (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
              >
                Suivant
              </button>
            )}
            {step === steps.length - 1 && (
              <button
                type="submit"
                className="ml-auto px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
              >
                Submit Abstract
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
