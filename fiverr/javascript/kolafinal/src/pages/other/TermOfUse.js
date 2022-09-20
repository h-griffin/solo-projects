import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerOne from "../../wrappers/banner/BannerOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const TermOfUse = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>KolaMarket | Term Of Use</title>
        <meta
          name="description"
          content="About page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Term Of Use
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <div className="container">
          <div className="text-center">
            <div>
              <p>
                <b>
                  PLEASE READ THESE TERMS OF USE (“TERMS”) CAREFULLY BECAUSE
                  THEY DESCRIBE YOUR RIGHTS AND RESPONSIBILITIES AND, TOGETHER
                  WITH ALL THE OTHER TERMS AND CONDITIONS REFERRED TO BELOW,
                  FORM A LEGALLY BINDING AGREEMENT BETWEEN YOU AND US REGARDING
                  YOUR USE OF OUR WEBSITE AND OTHER SERVICES.
                </b>
              </p>
              <br />
              <h4>
                THESE TERMS CONTAIN A BINDING ARBITRATION CLAUSE AND A CLASS
                ACTION WAIVER.
              </h4>
              <br />
              <br />
              <h3>
                SECTION 16 CONTAINS AN IMPORTANT NOTE TO NEW JERSEY CONSUMERS.
              </h3>
              <br />

              <p>
                IF FOR ANY REASON, YOU ARE UNABLE OR UNWILLING TO AGREE TO ALL
                OUR TERMS OF USE, PLEASE IMMEDIATELY STOP USING OR ATTEMPTING TO
                USE OUR WEBSITE AND OTHER SERVICES, BECAUSE IF YOU CONTINUE, YOU
                WILL BE AGREEING TO EVERYTHING IN OUR TERMS OF USE.
              </p>
            </div>
          </div>
          <br />
          <br />
          <h2>1. General</h2>
          <br />
          <p>
            These Terms govern your use of the interactive websites, mobile and
            connected applications, software, and other online interactive
            features and services, including, but not limited to, emails,
            newsletters, forums, communities, sweepstakes and contests
            (collectively, the “Services”) operated by InterDept Inc. Additional
            terms and conditions of use applicable to specific areas of the
            Services may also be posted in such areas and, together with these
            Terms, govern your use of those areas and are referred to
            collectively as the “Agreement.”
          </p>
          <p>
            These Terms cover the fuse of KolaMarket and all its subsidiary
            websites that are linked. We reserve the right, in our discretion,
            to change or modify all or any part of the Agreement at any time,
            effective immediately upon notice published on this page. Your use
            of the Services constitutes your binding acceptance of these terms
            and conditions, including any changes or modifications made by
            InterDept as permitted above. Please be sure to review the Agreement
            periodically to ensure familiarity with the most current version. If
            at any time the terms and conditions of the Agreement are no longer
            acceptable to you, you should immediately cease all use of the
            Services. It is your responsibility to refer to the Agreement upon
            accessing the Services.
          </p>
          <p style={{ fontWeight: "bold" }}>
            COPPA: The Services are directed to teenagers and adults and are not
            directed to children under the age of 13. You must be 13 years of
            age or older to use the Services outside of the European Union and
            European Economic Area, and 16 years of age or older in the European
            Union and European Economic Area. InterDept complies with the
            Children’s Online Privacy Protection Act and does not permit
            registration by, and will not knowingly collect personally
            identifiable information from, anyone under 13. By registering for
            any Services, you represent and warrant that you are 13 years of age
            or older or, if you reside in the European Union or European
            Economic Area, 16 years of age or older. Additionally, you must
            provide true, accurate and complete registration information to
            become a member of the Services (“Member”). Creating a Member
            account if you are under the age of 13 outside of the European Union
            and European Economic Area or 16 in the European Union and European
            Economic Area, under automated means or under false or fraudulent
            pretenses constitutes unauthorized use of the Services, and such
            accounts will be deleted.
          </p>
          <p>
            As part of the registration process, you may be asked to select a
            username and password and you will be responsible for all activities
            occurring under your username and for keeping your password secure.
            We may refuse to grant you a username that impersonates someone
            else, violates or infringes on the trademark or proprietary rights
            of a third party, or is vulgar, offensive, or otherwise
            inappropriate, as determined by us in our sole discretion. You agree
            that your username and password is personal to you and should not be
            used to provide access to the Services to any other person or
            entity.
          </p>
          <p>
            By using the Services, you agree to: (a) provide accurate and
            complete information about yourself as prompted by the registration
            form for a Service (“Registration Data”), (b) maintain and promptly
            update the Registration Data to keep it accurate and complete, and
            (c) maintain the security of your password. In the event you compose
            a profile upon registering for the Services (a “Member Profile”),
            such profile must describe you, an individual person. Examples of
            inappropriate profiles include, but are not limited to, profiles
            that purport to represent an animal, place, inanimate object,
            fictional character, or real individual who is not you.
          </p>
          <p>
            KolaMarket.com allows you to purchase products (“Products”). Such
            Products and pricing on the sites may change at any time without
            prior notice to you. You agree that you will only purchase Products
            on the sites for your own use and enjoyment or as a gift for another
            person, that all information you submit through the site is
            complete, accurate, current and true and that you are not barred
            from receiving Products under applicable law. Some Products you
            purchase may be used or contain used parts. Certain software or
            other materials that you purchase through the sites may be subjected
            to further export controls. You agree to comply with all applicable
            export and re-export restrictions, laws and regulations and will not
            encourage, assist, or authorize the transfer of such products to a
            prohibited country in violation of law, rule or regulation. Please
            be advised that an order confirmation to you does not signify
            acceptance of your order, nor does it constitute confirmation of an
            offer to sell. At any time after receipt, your order may be
            accepted, declined, or quantity restrictions or other limits may be
            placed on your order for any reason. If you are charged for an order
            that has been canceled, you may seek a refund for the full amount of
            the canceled portion of such order. While we strive to make all
            information on the sites as accurate as possible, we do not warrant
            that Product descriptions or other content is accurate, complete or
            error free. Promotions and availability of products are subject to
            change. Send us an email at info@KolaMarket.com if you have any
            questions on pending and/or cancelled orders.
          </p>
          <br />
          <br />
          <h2>2. Your Use of Content</h2>
          <br />
          <p>
            You acknowledge that the Services contain information, software,
            articles, reviews, content, photographs, audio and video clips,
            graphics, links, logos, trademarks, the “look and feel” of our
            websites, applications and software and other material
            (collectively, the “Content”) that are protected by copyright,
            trademark and/or other proprietary rights of InterDept Inc. or third
            parties. All Content on the Services is protected by applicable
            copyright laws. You agree to comply with all copyright laws and any
            copyright notices, information, or restrictions contained in any
            Content available on or accessed through the Services. Users of the
            Services may use the Content only for their personal, noncommercial
            use. Businesses, organizations or other legal entities may not
            become Members, and are not permitted to use the Services for any
            purpose, including but not limited to collecting usernames and/or
            email addresses of Members by electronic or other means for the
            purpose of sending unsolicited email and unauthorized framing of, or
            linking to, the Services or users on the Services.
          </p>
          <p>
            Except as expressly permitted, you may not (i) modify, publish,
            transmit, reproduce, create derivative works from, distribute,
            perform, display, adapt, aggregate, sell, transfer or in any way
            exploit any of the Content, code or Material (defined below), in
            whole or in part, or (ii) use any robot, spider, site search and/or
            retrieval application, or other device to scrape, extract, retrieve
            or index any portion of the Services. Content consisting of
            downloadable or web-based software may not be reverse engineered
            unless specifically authorized by the owner of the software’s patent
            and/or copyright. You also agree not to circumvent, disable or
            otherwise interfere with any security related features of the
            Services or the Content, including features that prevent or restrict
            use or copying, or that enforce limitations on use.
          </p>
          <p>
            To the extent that you provide us with any suggestions, feedback or
            other information relating to our business or the Services
            (including, but not limited to, suggested new products or services
            or improvements to existing products and services), such information
            is provided to us on a non-confidential and unrestricted basis, and
            you hereby grant to the Licensee (as defined above) a non-exclusive,
            worldwide, perpetual, royalty-free, fully transferrable and
            sublicensable right and license to reproduce, display, distribute,
            use and fully exploit such suggestions, feedback and information.
          </p>
          <p>
            For questions regarding use of Content please email
            info@KolaMArket.com
          </p>
          <br />
          <br />
          <h2 style={{ color: "red" }}>3. Rules of Conduct</h2>
          <br />
          <p style={{ color: "red" }}>
            InterDept has the right, but not the obligation, to investigate any
            illegal and/or unauthorized use of the Services and appropriate
            legal action may be taken, including without limitation, civil, and
            injunctive relief. While utilizing the Services, you may not:
          </p>
          <div className="ml-5 mr-5">
            <ul>
              <li style={{ color: "red" }}>
                • Use the Services for any commercial purpose, to distribute any
                advertising or solicitation of funds or goods and services, or
                to solicit users to join competitive online services;
              </li>
            </ul>
          </div>
          <br />
          <br />
          <h2 style={{ color: "red" }}>4. Endorsement</h2>
          <br />
          <p style={{ fontWeight: "bolder" }}>
            INTERDEPT INC. MAY RECEIVE A COMMISSION, FEE AND/OR OTHER
            COMPENSATION ON SOME CLICKS OR PURCHASES MADE ON, THROUGH OR LINKED
            FROM THE SERVICES. THIS MEANS INTERDEPT INC. MAY RECEIVE SOME FORM
            OF COMPENSATION THROUGH AN ARRANGEMENT IT HAS WITH A THIRD PARTY IF
            YOU (i) CLICK ON CERTAIN ADS OR LINKS ON OUR WEBSITES, EMAILS OR
            NEWSLETTERS, OR (ii) PURCHASE A PRODUCT OR SERVICE AFTER CLICKING A
            LINK.
          </p>
          <p>
            InterDept does not represent or endorse the accuracy or reliability
            of any Content or other material posted on any interactive area or
            elsewhere on the Services and you acknowledge that any reliance upon
            such Content or other material shall be at your sole risk. Any
            Content or other material placed on any interactive area by users
            represents the views of the user posting the statement, and does not
            represent the views of InterDept.
          </p>
          <p>
            The Services may contain links to sites on the Internet which are
            owned and operated by third parties (the “External Site(s)”). You
            acknowledge that InterDept is not responsible for the availability
            of, or the content located on or through, any External Site, and
            that your use of such External Sites may be subject to a third
            party’s terms and conditions and/or privacy policy. Any third-party
            content or a link to a third-party site is not an endorsement of
            that content or third-party site. You should contact the site
            administrator or webmaster for those External Sites if you have any
            concerns regarding such links or the content located on such
            External Sites.
          </p>
          <p>
            Typically, we do not directly sell, resell, or license any of the
            products or the services that we review, list, or advertise on our
            sites, and we disclaim any responsibility for or liability related
            to them. Your correspondence or related activities with third
            parties, including payment transactions and goods-delivery
            transactions, are solely between you and that third party. All
            product and deal information such as discount, price and
            availability are believed to be accurate as of the time of
            publication and are subject to change. Please verify these details
            with the merchant site and check the merchant’s terms and conditions
            before you buy. You agree that we will not be responsible or liable
            for any loss or damage of any sort incurred as the result of any of
            your transactions with third parties. Any questions, complaints, or
            claims related to any product or service should be directed to the
            appropriate vendor. However, in the event we do sell, resell, or
            license products or services, any terms and conditions related to
            your purchase or license of such products and services from us or
            any affiliates will be accessible on the applicable site page.
          </p>
          <p>
            Please note that we may allow certain manufacturers to license, use
            and/or reprint a InterDept trademark, logo, or a review in whole or
            in part, in its own marketing materials and advertisements in
            exchange for a license fee.
          </p>
          <br />
          <br />
          <h2>5. Indemnification.</h2>
          <p>
            You agree to indemnify, defend and hold InterDept and its
            affiliates, and their respective officers, directors, owners,
            agents, information providers and licensors (collectively, the
            “InterDept Parties”) harmless from and against any and all claims,
            liability, losses, damages, costs and expenses (including attorneys’
            fees) incurred by any InterDept Party in connection with:
          </p>
          <div className="ml-5 mr-5">
            <ul>
              <li className="ml-5 mr-5">
                • Your use of, or connection to, our Services;
              </li>
              <li className="ml-5 mr-5">
                • Any use or alleged use of your accounts or your passwords by
                any person, whether or not authorized by you;
              </li>
              <li className="ml-5 mr-5">
                • The content, the quality, or the performance of Material that
                you submit;
              </li>
              <li className="ml-5 mr-5">
                • Your violation of the Agreement or the InterDept policy;
              </li>
              <li className="ml-5 mr-5">
                • Your violation of the rights of any other person or entity; or
              </li>
              <li className="ml-5 mr-5">
                • Your violation of any applicable laws, rules or regulations.
              </li>
            </ul>
          </div>
          <p>
            InterDept Inc. reserves the right, at its own expense, to assume the
            exclusive defense and control of any matter otherwise subject to
            indemnification by you, and in such case, you agree to cooperate
            with the InterDept defense of such claim
          </p>
          <br />
          <br />
          <h2>6. Termination of Service</h2>
          <br />
          <p>
            InterDept reserves the right, in its sole discretion, to restrict,
            suspend or terminate your access to all or any part of the Services
            at any time for any reason without prior notice or liability.
            Conversely, you may terminate your access to the Services at any
            time by immediately ceasing use of the Services. The terms of the
            Agreement shall survive any termination of your access. InterDept
            may change, suspend or discontinue all or any aspect of the Services
            at any time, including the availability of any feature, database, or
            Content (including the discussion areas), without prior notice or
            liability.
          </p>
          <br />
          <br />
          <h2>7. Disclaimer of Warranties; Limitation of Liability.</h2>
          <br />
          <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
            The Services and the Content are distributed on an “as is, as
            available” basis. None of InterDept, third party vendors or content
            providers or their respective agents makes any warranties of any
            kind, either express or implied, including, without limitation,
            warranties of title or implied warranties of merchantability or
            fitness for a particular purpose, with respect to the Services, any
            Content or any products or services sold through the Services.
            Neither InterDept nor any third party content provider warrants that
            any of the goods or services linked to or advertised in the Services
            comply with data protection or other relevant legislation and
            InterDept accepts no liability whatsoever for any claim arising from
            such goods or services.
          </p>
          <p style={{ fontStyle: "italic" }}>
            You expressly agree that the entire risk as to the quality and
            performance of the Services and the accuracy or completeness of the
            Content is assumed solely by you and InterDept cannot guarantee the
            continued availability of any particular component of the Services.
            You specifically acknowledge that InterDept is not responsible or
            liable for any unauthorized access to or alteration of your
            materials, data or other transmissions entered into through the
            Services or for any threatening, defamatory, obscene, offensive or
            illegal Content or for conduct of any other party or for any
            infringement of another’s rights.
          </p>
          <p style={{ fontStyle: "italic" }}>
            INTERDEPT SPECIFICALLY DISCLAIMS ANY LIABILITY, WHETHER BASED IN
            CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE. INTERDEPT, ANY THIRD
            PARTY CONTENT PROVIDER AND THEIR RESPECTIVE AGENTS SHALL NOT BE
            LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR
            CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OF OR INABILITY TO USE
            THE SERVICES, INCLUDING, WITHOUT LIMITATION, LOSS OR CORRUPTION OF
            INFORMATION OR DATA, LOSS OF BUSINESS OR LOST PROFITS, LOSS OF
            REPUTATION OR GOODWILL, ARISING OUT OF OR RELATED TO THIS AGREEMENT
            OR THE SERVICES, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY
            OF LIABILITY EVEN IF SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY
            OF SUCH DAMAGES. IF, NOTWITHSTANDING THE OTHER PROVISIONS OF THIS
            AGREEMENT, INTERDEPT IS FOUND TO BE LIABLE TO YOU FOR ANY DAMAGE OR
            LOSS WHICH ARISES OUT OF OR IS ANY WAY CONNECTED TO YOUR USE OF THE
            SERVICES, LIABILITY OF INTERDEPT SHALL IN NO EVENT EXCEED THE
            GREATER OF (I) THE TOTAL OF ANY SUBSCRIPTION OR SIMILAR FEES WITH
            RESPECT TO ANY SERVICE OR FEATURE OF THE SERVICES PAID IN THE SIX
            MONTHS PRIOR TO THE DATE OF THE INITIAL CLAIM MADE AGAINST
            INTERDEPT, OR (II) ONE HUNDRED U.S. DOLLARS ($100.00).
          </p>
          <p style={{ fontWeight: "bold" }}>
            Some jurisdictions do not allow exclusion of implied warranties or
            certain limitations of liability, including for incidental or
            consequential damages, punitive or exemplary damages, bodily or
            moral (reputational) damages, gross negligence, death or personal
            injury caused by negligence, personal injury or loss of or damage to
            property caused by defective products, fraud and/or fraudulent
            misrepresentation, or recklessness, so the above limitations or
            exclusions may not apply to you. In such jurisdictions, the
            liability of InterDept, third party content providers and their
            respective agents shall be limited to the greatest extent permitted
            by applicable law.
          </p>
          <br />
          <br />
          <h2>8. International Use</h2>
          <br />
          <p>
            We make no claims that any Material, Services or any Content is
            appropriate or may be downloaded outside of the United States or
            outside the country where such Material, Services or any Content was
            produced. Access to the Material, Services or any Content may not be
            legal in certain countries or for certain persons. If you access any
            Material, Services or Content from outside of the United States, you
            do so at your own risk and are responsible for compliance with the
            laws of your jurisdiction. You agree to comply with: (i) all local
            rules regarding user conduct on the Internet and acceptable content;
            and (ii) all applicable laws regarding the downloading and/or
            transmission of technical data and other material from or to the
            United States and the country in which you are located
          </p>
          <br />
          <br />
          <h2>9. No Submission of Unsolicited Ideas</h2>
          <br />
          <p>
            InterDept does not accept unsolicited ideas of any kind, including
            ideas for: advertising; promotions; new products, technologies,
            processes, or materials; marketing plans; or product names. Please
            do not send us any such ideas or materials relating to such ideas.
            This is to avoid any potential misunderstanding or dispute should
            our products or marketing strategies seem similar to unsolicited
            ideas submitted to us. If, despite this request, you do send us any
            unsolicited ideas or materials, we make no assurances that such
            ideas or materials will be treated as confidential or proprietary.
          </p>
          <br />
          <br />
          <h2>10. Binding Arbitration</h2>
          <br />
          <p>
            <b>ARBITRATION NOTICE:</b> Unless you opt out in accordance with
            this Section, any dispute, claim or controversy arising out of or
            relating to this Agreement or the breach, termination, enforcement,
            interpretation or validity thereof, including the determination of
            the scope or applicability of this agreement to arbitrate, shall be
            determined by arbitration before a single arbitrator. Judgment on
            the arbitration award may be entered in any court having
            jurisdiction. This clause shall not preclude parties from seeking
            provisional remedies in aid of arbitration from a court of
            appropriate jurisdiction. Notwithstanding the foregoing, each party
            shall have the right to institute an action in a court of proper
            jurisdiction for injunctive or other equitable relief pending a
            final decision by the arbitrator.
          </p>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AGREE THAT (I) NO
            ARBITRATION SHALL BE JOINED WITH ANY OTHER; (II) THERE IS NO RIGHT
            OR AUTHORITY FOR ANY DISPUTE TO BE ARBITRATED ON A CLASS-ACTION
            BASIS OR TO UTILIZE CLASS ACTION PROCEDURES; AND (III) THERE IS NO
            RIGHT OR AUTHORITY FOR ANY DISPUTE TO BE BROUGHT IN A PURPORTED
            REPRESENTATIVE CAPACITY ON BEHALF OF THE GENERAL PUBLIC OR ANY OTHER
            PERSONS. If the specific provision of this paragraph is found to be
            unenforceable, then the entirety of this Section entitled “Binding
            Arbitration” shall be null and void.
          </p>
          <p>
            YOU AGREE TO WAIVE YOUR RIGHT TO A JURY TRIAL AND UNDERSTAND THAT,
            ABSENT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT. THE
            SCOPE OF THIS WAIVER IS INTENDED TO BE ALL-ENCOMPASSING OF ANY AND
            ALL DISPUTES THAT MAY BE FILED IN ANY COURT AND THAT RELATE TO THE
            SUBJECT MATTER OF THIS AGREEMENT, INCLUDING, WITHOUT LIMITATION,
            CONTRACT CLAIMS, TORT CLAIMS AND ALL OTHER COMMON LAW AND STATUTORY
            CLAIMS.
          </p>
          <p>
            You may opt out of this agreement to arbitrate. If you opt out in
            accordance with this Section, neither you nor InterDept can require
            the other to participate in an arbitration proceeding. To opt out,
            you must notify InterDept in writing within thirty (30) days of the
            date that you first became subject to this arbitration provision.
          </p>
          <br />
          <br />
          <h2>11. Limitation Period for Claims.</h2>
          <br />
          <p>
            You agree that regardless of any statute or law to the contrary, any
            claim or cause of action arising out of or related to use of our
            sites or the Agreement must be filed within one (1) year after such
            claim or cause of action arose or be forever barred.
          </p>
          <br />
          <br />
          <h2>12. Miscellaneous</h2>
          <br />
          <p>
            We may be required by international, state or federal law to notify
            you of certain events. You hereby acknowledge and consent that such
            notices will be effective upon our posting them on our sites or
            delivering them to you through e-mail. Subject to the arbitration
            provision above and for all purposes of this Agreement, this
            Agreement shall be construed in accordance with the laws of the
            State of Texas, without reference to principles of choice of law.
            You and InterDept each irrevocably consent to the personal
            jurisdiction of the federal or state courts located in Dallas Texas,
            suit or proceeding arising out of or related to this Agreement or to
            the Services (including without limitation any Content) and waive
            any objection to venue in any of the Courts for such an action, suit
            or proceeding (whether based on forum non conveniens or otherwise);
            additionally, you agree that you will not bring any such action,
            suit or proceeding in any court other than the Courts.
          </p>
          <p>
            This Agreement constitutes the entire agreement between the parties
            with respect to the subject matter hereof, and supersedes all
            previous written or oral agreements between the parties with respect
            to such subject matter. If any inconsistency exists between the
            terms of this Agreement and any additional terms and conditions
            posted on the Services, such terms shall be interpreted as to
            eliminate any inconsistency, if possible, and otherwise, the
            additional terms and conditions shall control. If any provision of
            this Agreement is held invalid, illegal or unenforceable in any
            respect, (i) such provision shall be interpreted in such a manner as
            to preserve, to the maximum extent possible, the intent of the
            parties, (ii) the validity, legality and enforceability of the
            remaining provisions shall not in any way be affected or impaired
            thereby, and (iii) such decision shall not affect the validity,
            legality or enforceability of such provision under other
            circumstances.
          </p>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

TermOfUse.propTypes = {
  location: PropTypes.object,
};

export default TermOfUse;
