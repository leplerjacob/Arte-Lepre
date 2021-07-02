import React from "react";
import {
  ServicesProvidedContainer,
  Button
} from "./servicesProvided/styledServicesProvided";

const ServicesProvided = () => {
  return (
    <ServicesProvidedContainer>
      <h2>Restoration And Conservation Services Offered</h2>
      <ul>
        <li>
          <span>
            Conservative Restoration: Consolidation intervention on the existing
            parts of the furniture (worm-eaten, detached or degraded), without
            the necessary restoration of the original conditions.
          </span>
        </li>
        <br />
        <li>
          <span>
            Integrative Restoration: Reconstruction intervention on furniture
            that lacks fundamental parts
          </span>
        </li>
      </ul>
      <hr style={{ width: "100%" }} />
      <h2>Stages of Restoration</h2>
      <ul>
        <li>
          <span>
            Stripping: removal, if necessary, of old paint and dirt from the
            surface of the furniture, trying to preserve the original patina as
            much as possible. It takes place only in integrative interventions.
            This is a delicate operation in which the integrity of the patina
            must be safeguarded, that is, the color acquired by the piece of
            furniture over time. To limit or even better to prohibit abrasive
            and too aggressive substances containing acid.
          </span>
        </li>
        <br />
        <li>
          <span>
            Woodworm treatment: injection of anti-woodworm products into the
            holes in the wood. An odorless and colorless insecticide is
            permethrin.
          </span>
        </li>
        <br />
        <li>
          <span>
            Restoration of the veneer: integration, where necessary, of ancient
            material using natural hot glue. The veneer is the finishing wood
            layer, consisting of a thin sheet of precious material, with a
            thickness of no more than one millimeter.
          </span>
        </li>
        <br />
        <li>
          <span>
            Reconstruction of the missing parts: interventions which, in the
            case of integrative restorations, restore the furniture to its
            original structure Filler: performed with a mixture of colored earth
            pigments that are as close as possible to the original tone of the
            wood.
          </span>
        </li>
        <br />
        <li>
          <span>
            Shellac finish: smoothing and polishing treatment that restores the
            patina of the past to the furniture. It consists in the application
            of shellac, a natural resinous substance that, dissolved in alcohol
            and mixed with other resins, allows the wood to be polished.
          </span>
        </li>
        <br />
        <li>
          <span>
            Beeswax coating: Application of a layer of beeswax to obtain a
            uniform patina that will protect the surface of the wood.
          </span>
        </li>
      </ul>
      <a href="mailto: artelepre@gmail.com"><Button>Email Us</Button></a>
      <span>or</span>
      <a href="tel: 2025505312"><Button>Call Us</Button></a>
    </ServicesProvidedContainer>
  );
};

export default ServicesProvided;
