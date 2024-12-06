// OPENSRC-1D3B = S3yJ91q0Gar3O72I
// ABCDEFG-1D3B xvn0qEeftqyrkG52
// NOSOUP4-3A5B zvd97y9h
// 7G9C0G2-6FF1 35c0b0tVb32Z6ivD
//
//
// HDD SN WXH109A14712  ?
import {
    calculateSuffix, dellHddSolver, dellLatitude3540Solver, dellSolver, DellTag, DES, hddOldSolver,
    keygenDell, latitude3540Keygen, SuffixType
} from "../dell";

// shortcut for simpler testing
function checkSuffix(serial: string, tag: DellTag, type: SuffixType): number[] {
    serial = serial.concat(tag);
    let serialArr: number[] = serial.split("").map((c) => c.charCodeAt(0));
    return calculateSuffix(serialArr, tag, type);
}

describe("Test calculateSuffix", () => {
    test("Check tag suffix for: 1234567-595B", () => {
        let suffix = checkSuffix("1234567", DellTag.Tag595B, SuffixType.ServiceTag);
        expect(suffix).toEqual([25, 34, 38, 8, 32, 48, 23, 8]);
    });

    test("Check tag suffix for: 1234567-D35B", () => {
        let suffix = checkSuffix("1234567", DellTag.TagD35B, SuffixType.ServiceTag);
        expect(suffix).toEqual([25, 34, 38, 8, 32, 48, 23, 8]);
    });

    test("Check tag suffix for: 1234567-2A7B", () => {
        let suffix = checkSuffix("1234567", DellTag.Tag2A7B, SuffixType.ServiceTag);
        expect(suffix).toEqual([101, 103, 102, 117, 115, 100, 97, 117]);
    });

    test("Check tag suffix for: 1234567-A95B", () => {
        let suffix = checkSuffix("1234567", DellTag.TagA95B, SuffixType.ServiceTag);
        expect(suffix).toEqual([25, 34, 38, 8, 32, 48, 23, 8]);
    });

    test("Check tag suffix for: 1234567-1D3B", () => {
        let suffix = checkSuffix("1234567", DellTag.Tag1D3B, SuffixType.ServiceTag);
        expect(suffix).toEqual([65, 78, 57, 72, 97, 56, 80, 72]);
    });

    test("Check tag suffix for: 1234567-6FF1", () => {
        let suffix = checkSuffix("1234567", DellTag.Tag6FF1, SuffixType.ServiceTag);
        expect(suffix).toEqual([51, 73, 56, 52, 76, 122, 71, 52]);
    });

    test("Check tag suffix for: 1234567-1F66", () => {
        let suffix = checkSuffix("1234567", DellTag.Tag1F66, SuffixType.ServiceTag);
        expect(suffix).toEqual([117, 66, 48, 111, 83, 107, 85, 111]);
    });

    test("Check tag suffix for: 1234567-1F5A", () => {
        let suffix = checkSuffix("1234567", DellTag.Tag1F5A, SuffixType.ServiceTag);
        expect(suffix).toEqual([101, 103, 102, 117, 115, 100, 97, 117]);
    });

    test("Check tag suffix for: ABCDEFG-1F5A", () => {
        let suffix = checkSuffix("ABCDEFG", DellTag.Tag1F5A, SuffixType.ServiceTag);
        expect(suffix).toEqual([0x74, 0x6e, 0x76, 0x75, 0x69, 0x6f, 0x74, 0x68]);
    });

    test("Check tag suffix for: 1234567-BF97", () => {
        let suffix = checkSuffix("1234567", DellTag.TagBF97, SuffixType.ServiceTag);
        expect(suffix).toEqual([77, 78, 120, 56, 54, 70, 114, 56]);
    });

    test("Check tag suffix for: ABCDEFG-BF97", () => {
        let suffix = checkSuffix("ABCDEFG", DellTag.TagBF97, SuffixType.ServiceTag);
        expect(suffix).toEqual([51, 71, 109, 56, 90, 114, 51, 91]);
    });

    // HDD
    test("Check hdd suffix for: 12345678901-595B", () => {
        let suffix = checkSuffix("12345678901", DellTag.Tag595B, SuffixType.HDD);
        expect(suffix).toEqual([5, 9, 35, 6, 47, 5, 21, 32]);
    });

    test("Check hdd suffix for: 12345678901-D35B", () => {
        let suffix = checkSuffix("12345678901", DellTag.TagD35B, SuffixType.HDD);
        expect(suffix).toEqual([5, 9, 35, 6, 47, 5, 21, 32]);
    });

    test("Check hdd suffix for: 12345678901-2A7B", () => {
        let suffix = checkSuffix("12345678901", DellTag.Tag2A7B, SuffixType.HDD);
        expect(suffix).toEqual([48, 51, 113, 98, 107, 48, 99, 115]);
    });

    test("Check hdd suffix for: 12345678901-A95B", () => {
        let suffix = checkSuffix("12345678901", DellTag.TagA95B, SuffixType.HDD);
        expect(suffix).toEqual([5, 9, 35, 6, 47, 5, 21, 32]);
    });

    test("Check hdd suffix for: 12345678901-1D3B", () => {
        let suffix = checkSuffix("12345678901", DellTag.Tag1D3B, SuffixType.HDD);
        expect(suffix).toEqual([48, 73, 55, 118, 76, 48, 99, 97]);
    });

    test("Check hdd suffix for: 12345678901-6FF1", () => {
        let suffix = checkSuffix("12345678901", DellTag.Tag6FF1, SuffixType.HDD);
        expect(suffix).toEqual([48, 112, 75, 86, 101, 48, 77, 76]);
    });

    test("Check hdd suffix for: 12345678901-1F66", () => {
        let suffix = checkSuffix("12345678901", DellTag.Tag1F66, SuffixType.HDD);
        expect(suffix).toEqual([48, 114, 79, 71, 55, 48, 49, 83]);
    });

    test("Check hdd suffix for: 12345678901-1F5A", () => {
        let suffix = checkSuffix("12345678901", DellTag.Tag1F5A, SuffixType.HDD);
        expect(suffix).toEqual([48, 51, 113, 98, 107, 48, 99, 115]);
    });

    test("Check hdd suffix for: 12345678901-BF97", () => {
        let suffix = checkSuffix("12345678901", DellTag.TagBF97, SuffixType.HDD);
        expect(suffix).toEqual([48, 100, 54, 107, 121, 48, 81, 54]);
    });
});

describe("Test keygenDell", () => {
    test("Dell password for: 1234567-595B", () => {
        expect(keygenDell("1234567", DellTag.Tag595B, SuffixType.ServiceTag))
            .toEqual(["46rg65ky"]);
    });
    test("Dell password for: 1234567-D35B", () => {
        expect(keygenDell("1234567", DellTag.TagD35B, SuffixType.ServiceTag))
            .toEqual(["5tc8q9re"]);
    });
    test("Dell password for: 1234567-2A7B", () => {
        expect(keygenDell("1234567", DellTag.Tag2A7B, SuffixType.ServiceTag))
            .toEqual(["J1KuwWpSUgnDarfi"]);
    });
    test("Dell password for: 1234567-A95B", () => {
        expect(keygenDell("1234567", DellTag.TagA95B, SuffixType.ServiceTag))
            .toEqual(["46rg65ky"]);
    });
    test("Dell password for: 1234567-1D3B", () => {
        expect(keygenDell("1234567", DellTag.Tag1D3B, SuffixType.ServiceTag))
            .toEqual(["Sn4fkF8bS57NymZl"]);
    });
    test("Dell password for: 1234567-1F66", () => {
        expect(keygenDell("1234567", DellTag.Tag1F66, SuffixType.ServiceTag))
            .toEqual(["kIpTBzx0m3s10JDR"]);
    });
    test("Dell password for: 1234567-6FF1", () => {
        expect(keygenDell("1234567", DellTag.Tag6FF1, SuffixType.ServiceTag))
            .toEqual(["Rzn1wGe555H5bM2r"]);
    });
    test("Dell password for: OPENSRC-1D3B", () => {
        expect(keygenDell("OPENSRC", DellTag.Tag1D3B, SuffixType.ServiceTag))
            .toEqual(["S3yJ91q0Gar3O72I"]);
    });
    test("Dell password for: ABCDEFG-1D3B", () => {
        expect(keygenDell("ABCDEFG", DellTag.Tag1D3B, SuffixType.ServiceTag))
            .toEqual(["xvn0qEeftqyrkG52"]);
    });
    test("Dell password for: 7G9C0G2-6FF1", () => {
        expect(keygenDell("7G9C0G2", DellTag.Tag6FF1, SuffixType.ServiceTag))
            .toEqual(["35c0b0tVb32Z6ivD"]);
    });
    test("Dell password for: DELLSUX-1F66", () => {
        expect(keygenDell("DELLSUX", DellTag.Tag1F66, SuffixType.ServiceTag))
            .toEqual(["qHXaL0ntli6Gu4c0"]);
    });
    test("Dell password for: CRPP562-1F66", () => {
        expect(keygenDell("CRPP562", DellTag.Tag1F66, SuffixType.ServiceTag))
            .toEqual(["8i5qLGa9woA919Ys"]);
    });
    test("Dell password for: CDG8T32-1F66", () => {
        expect(keygenDell("CDG8T32", DellTag.Tag1F66, SuffixType.ServiceTag))
            .toEqual(["4Ke3y2L3kTP2f6Vo"]);
    });
    test("Dell password for: 8M5RQ32-1F66", () => {
        expect(keygenDell("8M5RQ32", DellTag.Tag1F66, SuffixType.ServiceTag))
            .toEqual(["3rlrbaSj46Iw221g"]);
    });

    test("Dell password for: 1234567-1F5A", () => {
        expect(keygenDell("1234567", DellTag.Tag1F5A, SuffixType.ServiceTag))
            .toEqual(["2ls2b8GiP9H032kx"]);
    });

    test("Dell password for: OPENSRC-1F5A", () => {
        expect(keygenDell("OPENSRC", DellTag.Tag1F5A, SuffixType.ServiceTag))
            .toEqual(["ZC3j2t56eIe4Thgi"]);
    });

    test("Dell password for: ABCDEFG-1F5A", () => {
        expect(keygenDell("ABCDEFG", DellTag.Tag1F5A, SuffixType.ServiceTag))
            .toEqual(["x2zL5n7jj2Gl2TIh"]);
    });

    test("Dell password for: 1234567-BF97", () => {
        expect(keygenDell("1234567", DellTag.TagBF97, SuffixType.ServiceTag))
            .toEqual(["2r09GZhU[r0kW2zr"]);
    });

    test("Dell password for: OPENSRC-BF97", () => {
        expect(keygenDell("OPENSRC", DellTag.TagBF97, SuffixType.ServiceTag))
            .toEqual(["Dp29XkbyMrkBrp6Z"]);
    });

    test("Dell password for: ABCDEFG-BF97", () => {
        expect(keygenDell("ABCDEFG", DellTag.TagBF97, SuffixType.ServiceTag))
            .toEqual(["kr9Z1cmPpahGzsQ["]);
    });

    test("Dell password for: DELLSUX-BF97", () => {
        expect(keygenDell("DELLSUX", DellTag.TagBF97, SuffixType.ServiceTag))
            .toEqual(["rrNM2LrbD8nGsd2P"]);
    });
    
    test("Dell password for: 1234567-E7A8", () => {
        expect(keygenDell("1234567", DellTag.TagE7A8, SuffixType.ServiceTag).sort())
            .toEqual(["Qk3LkU22kPeyq2jd", "rLIqjUy59IG2JU2R"].sort());
    });
    test("Dell password for: D875TG2-E7A8", () => {
        expect(keygenDell("D875TG2", DellTag.TagE7A8, SuffixType.ServiceTag).sort())
            .toEqual(["rLZc96rMZyGQ2GMG", "1Q6rxIWMGUznXZNy"].sort());
    });
    test("Dell password for: 2XSX273-E7A8", () => {
        expect(keygenDell("2XSX273", DellTag.TagE7A8, SuffixType.ServiceTag).sort())
            .toEqual(["rPQ0DGLdqckG2kUZ", "0ZaP6RzW9qk73rmq"].sort());
    });
    test("Dell password for: CZXKYX2-E7A8", () => {
        expect(keygenDell("CZXKYX2", DellTag.TagE7A8, SuffixType.ServiceTag).sort())
            .toEqual(["RGWD2BIR9UB9ZdIy", "38Gr7brmRGBPPIkz"].sort());
    });
    test("Dell password for: 6651WZ2-E7A8", () => {
        expect(keygenDell("6651WZ2", DellTag.TagE7A8, SuffixType.ServiceTag).sort())
            .toEqual(["PBjMMMsZUQR2MhmR", "Q1N6k2sLRkGGGrEN"].sort());
    });
    test("Dell password for: 9M2JTG2-E7A8", () => {
        expect(keygenDell("9M2JTG2", DellTag.TagE7A8, SuffixType.ServiceTag))
            .toContain("J2yR66N1kdn2N17m");
    });
    test("Dell password for: 1219P73-E7A8", () => {
        expect(keygenDell("1219P73", DellTag.TagE7A8, SuffixType.ServiceTag))
            .toContain("ksM02GskJ341hnDx");
    });

    // HDD
    test("Dell HDD password for: 1234567890A-595B", () => {
        expect(keygenDell("1234567890A", DellTag.Tag595B, SuffixType.HDD))
            .toEqual(["nyoap4lq"]);
    });
    test("Dell HDD password for: 1234567890A-D35B", () => {
        expect(keygenDell("1234567890A", DellTag.TagD35B, SuffixType.HDD))
            .toEqual(["dc14blrd"]);
    });
    test("Dell HDD password for: 1234567890A-2A7B", () => {
        expect(keygenDell("1234567890A", DellTag.Tag2A7B, SuffixType.HDD))
            .toEqual(["h6lwdi91qluUyt3u"]);
    });
    test("Dell HDD password for: 1234567890A-A95B", () => {
        expect(keygenDell("1234567890A", DellTag.TagA95B, SuffixType.HDD))
            .toEqual(["qr0s6x4n"]);
    });
    test("Dell HDD password for: 1234567890A-1D3B", () => {
        expect(keygenDell("1234567890A", DellTag.Tag1D3B, SuffixType.HDD))
            .toEqual(["6JQ1WacHNNR0Taia"]);
    });
    test("Dell HDD password for: 1234567890A-1F66", () => {
        expect(keygenDell("1234567890A", DellTag.Tag1F66, SuffixType.HDD))
            .toEqual(["vP0M31x066Z7Rq9p"]);
    });
    test("Dell HDD password for: 1234567890A-6FF1", () => {
        expect(keygenDell("1234567890A", DellTag.Tag6FF1, SuffixType.HDD))
            .toEqual(["5enLLpM3Immfb8CK"]);
    });
    test("Dell HDD password for: 1234567890A-1F5A", () => {
        expect(keygenDell("1234567890A", DellTag.Tag1F5A, SuffixType.HDD))
            .toEqual(["L9IJjYoUIXeY5wOy"]);
    });
    test("Dell HDD password for: 12345678901-1F5A", () => {
        expect(keygenDell("12345678901", DellTag.Tag1F5A, SuffixType.HDD))
            .toEqual(["QwO5Dki1zeR1n1t2"]);
    });
    test("Dell HDD password for: 12345678901-BF97", () => {
        expect(keygenDell("12345678901", DellTag.TagBF97, SuffixType.HDD))
            .toEqual(["nDrmUU6U5DI9ZLMI"]);
    });
    test("Dell HDD password for: 1234567890A-BF97", () => {
        expect(keygenDell("1234567890A", DellTag.TagBF97, SuffixType.HDD))
            .toEqual(["pRrky3r9ryEPNNJz"]);
    });
    test("Dell HDD password for: 234567890AB-BF97", () => {
        expect(keygenDell("234567890AB", DellTag.TagBF97, SuffixType.HDD))
            .toEqual(["h2RDrReN37I1NLmr"]);
    });
    test("Dell HDD password for: 1234567890A-E7A8", () => {
        expect(keygenDell("1234567890A", DellTag.TagE7A8, SuffixType.HDD).sort())
            .toEqual(["rN2rE2RBQh[X00yr", "G1bFzRGzjXIGzr22"].sort());
    });
    test("Dell HDD password for: 1234567890B-E7A8", () => {
        expect(keygenDell("1234567890B", DellTag.TagE7A8, SuffixType.HDD).sort())
            .toEqual(["Ic18yqyXXZI5Qj22", "kzzMazZrz53sRZJm"].sort());
    });
});

describe("Test keygenDell - 8FC8", () => {
    test("Dell password for: 1J5GBK3-8FC8", () => {
        expect(keygenDell("1J5GBK3", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["khkzrnGJbJrM1p3M"]);
    });
    test("Dell password for: 25BJXL3-8FC8", () => {
        expect(keygenDell("25BJXL3", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["yN4s6Xqy78mkz77h"]);
    });
    test("Dell password for: 324F5M3-8FC8", () => {
        expect(keygenDell("324F5M3", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["MkNar7rQQ[2zzUEG"]);
    });
    test("Dell password for: 4LRMTG3-8FC8", () => {
        expect(keygenDell("4LRMTG3", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["Q2r3Q696Q6[pEj4z"]);
    });
    test("Dell password for: 7QX1M13-8FC8", () => {
        expect(keygenDell("7QX1M13", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["25lXErJk1Rt643c2"]);
    });
    test("Dell password for: GW49GW2-8FC8", () => {
        expect(keygenDell("GW49GW2", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["2MNk[zzrDrreGckN"]);
    });
    test("Dell password for: DTKYY33-8FC8", () => {
        expect(keygenDell("DTKYY33", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["yQRG0nMkGI6[3LLc"]);
    });
    test("Dell password for: 75J80R2-8FC8", () => {
        expect(keygenDell("75J80R2", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["9U87hjTy1Rt648uj"]);
    });
    test("Dell password for: HY82ZY2-8FC8", () => {
        expect(keygenDell("HY82ZY2", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["x1jsL0rqz9GrzFrb"]);
    });
    test("Dell password for: D96ZN13-8FC8", () => {
        expect(keygenDell("D96ZN13", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["x1jsL0rqz9GrzFrb"]);
    });
    test("Dell password for: D9G5RN3-8FC8", () => {
        expect(keygenDell("D9G5RN3", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["1UGmNbNMBGJqn2ky"]);
    });
    test("Dell password for: B2S9ST3-8FC8", () => {
        expect(keygenDell("B2S9ST3", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["PR1L92hxDJIGP4GI"]);
    });
    test("Dell password for: 2P5B7G3-8FC8", () => {
        expect(keygenDell("2P5B7G3", DellTag.Tag8FC8, SuffixType.ServiceTag))
            .toEqual(["y[rzGGkrZJzbLZDJ"]);
    });
});

describe("Test Dell BIOS", () => {
    test("Dell for 12345678901 is yyyyyhnn", () => {
        expect(hddOldSolver("12345678901")).toEqual(["yyyyyhnn"]);
    });
    test("Dell for 1234567-595B", () => {
        expect(dellSolver("1234567-595B")).toEqual(["46rg65ky"]);
    });
    test("Dell for: 1234567-1F66", () => {
        expect(dellSolver("1234567-1f66")).toEqual(["kIpTBzx0m3s10JDR"]);
    });
    test("Dell for: 123456a-1F66", () => {
        // AFAIK Dell service tags is always uppercase
        // so this supposed to calculate password for 123456A-1F66
        expect(dellSolver("123456a-1f66")).toEqual(["5sS11TUKBmBOQKRS"]);
    });
    test("Dell HDD for: 1234567890A-595B", () => {
        expect(dellHddSolver("1234567890A-595b")).toEqual(["nyoap4lq"]);
    });
    test("Check bad dell tag", () => {
        expect(dellSolver("1234567-BAD1")).toEqual([]);
        expect(dellSolver("1234567-TOLONG")).toEqual([]);
        expect(dellHddSolver("1234567-SHORT")).toEqual([]);
    });
});

describe("Latitude 3540", () => {
    test("DES", () => {
        const data = Uint8Array.from("12345678".split("").map((v) => v.charCodeAt(0)));
        let enc = new DES(data);
        const encoded = Uint8Array.from([150, 208, 2, 136, 120, 213, 140, 137]);
        expect(enc.encryptBlock(data)).toEqual(encoded);
        expect(enc.decryptBlock(encoded)).toEqual(data);
    });
    test("Latitude 3540 Keygen", () => {
        expect(latitude3540Keygen("5F3988D5E0ACE4BF", "7QH8602")).toEqual("98072364");
        expect(latitude3540Keygen("76A7D90FD9563C5F", "3FN2J22")).toEqual("60485207");
        expect(latitude3540Keygen("1B6DD24D26E7B566", "BJVDG22")).toEqual("99937880");
        expect(latitude3540Keygen("1B6DD24D26E7C566", "BJVDG22")).toEqual(undefined);
    });
    test("Dell Latitude 3540 Solver", () => {
        expect(dellLatitude3540Solver("5F3988D5E0ACE4BF-7QH8602")).toEqual(["98072364"]);
        expect(dellLatitude3540Solver("5F3988D5E0ACE4bF-7QH8602")).toEqual(["98072364"]);
    });
});
