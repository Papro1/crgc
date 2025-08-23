import { useState } from "react";
import { useGlobal } from "../GlobalContext";

export default function Register() {
  const {
    workshops,
    selectedWorkshops,
    days,
    participants,
    submissions,
    contacts
  } = useGlobal()

  const [step, setStep] = useState(0);

  const steps = [1, 2, 3];
  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const toggleWorkshop = (workshop) => {
    setSelectedWorkshops((prev) =>
      prev.includes(workshop)
        ? prev.filter((w) => w !== workshop)
        : [...prev, workshop]
    );
  };

  return (
    <section id="register" className="py-20 bg-gray-50" aria-labelledby="regtitle">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p id="regtitle" className="uppercase text-sm font-semibold text-blue-600">
          Registration
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Inscription au CRGC 2025
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
            alert("Form submitted ✅");
          }}
          className="bg-white shadow rounded-2xl p-8 space-y-6"
        >
          {/* STEP 1 */}
          {step === 0 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullname" className="block font-medium">
                    Nom complet *
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    className="w-full border rounded-lg p-3"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium">
                    Adresse e-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-medium">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+253 …"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block font-medium">
                    Pays
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Bujumbura"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block font-medium">
                    Organisation / Institution
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block font-medium">
                    Fonction / Rôle
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block font-medium">
                    Catégorie de participation *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full border rounded-lg p-3"
                  >
                    <option value="">-- Sélectionner --</option>
                    <option value="government">Gouvernement</option>
                    <option value="researcher">Chercheur</option>
                    <option value="private_sector">Secteur privé</option>
                    <option value="civil_society">Société civile</option>
                    <option value="student">Étudiant</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="participation" className="block font-medium">
                    Type de participation *
                  </label>
                  <select
                    id="participation"
                    name="participation"
                    required
                    className="w-full border rounded-lg p-3"
                  >
                    <option value="">-- Sélectionner --</option>
                    <option value="in_person">Présentiel</option>
                    <option value="virtual">Virtuel</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-medium">Jours de présence</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                   {days.map((d,i) => <label key={i} className="flex items-center space-x-2 border rounded-lg p-2">
                        <input type="checkbox" name="days" value={d.id} />{" "}
                        <span>Jour {i+1}</span>
                      </label>
                   )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block font-medium">Intérêt pour les ateliers</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  { workshops.map((workshop, idx) => (
                    <label
                      key={idx}
                      className="flex items-center space-x-2 border rounded-lg p-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={workshop.id}
                        onChange={() => toggleWorkshop(workshop.id)}
                      />
                      <span>{workshop}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="diet" className="block font-medium">
                    Besoins alimentaires
                  </label>
                  <input
                    id="diet"
                    name="diet"
                    type="text"
                    placeholder="Végétarien, halal, allergies…"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
                <div>
                  <label htmlFor="access" className="block font-medium">
                    Besoins d'accessibilité
                  </label>
                  <input
                    id="access"
                    name="access"
                    type="text"
                    placeholder="Interprétation, mobilité…"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="needvisa" className="block font-medium">
                  Lettre d'invitation pour visa ?
                </label>
                <select
                  id="needvisa"
                  name="needvisa"
                  className="w-full border rounded-lg p-3"
                >
                  <option value="no">Non</option>
                  <option value="yes">Oui</option>
                </select>
              </div>
              <div>
                <label htmlFor="msg" className="block font-medium">
                  Message / Commentaire
                </label>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Votre message"
                  rows="4"
                  className="w-full border rounded-lg p-3"
                ></textarea>
              </div>
              <div className="flex items-start space-x-3">
                <input
                  id="consentReg"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1"
                />
                <label
                  htmlFor="consentReg"
                  className="text-gray-600 text-sm"
                >
                  Je consens à l'utilisation de mes informations pour
                  l'organisation et le suivi du CRGC, conformément à la politique
                  de confidentialité.
                </label>
              </div>
              <p className="text-xs text-gray-500">
                En soumettant ce formulaire, vous acceptez nos{" "}
                <a href="#" className="underline text-blue-600">
                  Conditions d'utilisation
                </a>
                .
              </p>
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
                S'inscrire
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
